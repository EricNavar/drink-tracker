import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { DrinkItem } from '../components/DrinkItem';
import { Banner } from '../components/Banner';
import {
    Drink,
    DrinkingSession,
    NavigationProps,
    Screens,
} from '../commonTypes';
import { FinishModal } from '../components/FinishModal';
import { BigButton, InnerLayout, Row } from '../styling/commonStyles';
import { StyledLayout } from '../styling/commonStyles';
import { NewDrinkModal } from '../components/NewDrinkModal';
import { EditDrinkModal } from '../components/EditDrinkModal';
import { Text } from 'react-native-ui-lib';
import { addNewDrink, getSession, endSession as saveSession } from '../api';
import { makeId } from '../util';
import { BackButton } from '../components/BackButton';
import { FlatList } from 'react-native-gesture-handler';
import { deleteDrink, storeDrinkingLimits } from '../api/guestAccountAPI';
import { DrinkingLimitsModal } from '../components/DrinkingLimitsModal';

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 16,
    },
});

export const Divider = styled(View)`
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    wight: 100%;
`;

type SessionScreenProps = {
    route: {
        params: {
            sessionId: string;
        };
    };
} & NavigationProps;

export const SessionScreen = (props: SessionScreenProps) => {
    const [session, setSession] = React.useState<DrinkingSession | null>(null);
    const [expectedDrinksCount, setExpectedDrinksCount] = React.useState(0);

    const [finishModalOpen, setFinishModalOpen] = React.useState(false);
    const [newDrinkModalOpen, setNewDrinkModalOpen] = React.useState(false);
    const [editDrinkModalOpen, setEditDrinkModalOpen] = React.useState(false);
    const [limitsModalOpen, setLimitsModalOpen] = React.useState(false);
    const [selectedDrinkIndex, setSelectedDrinkIndex] = React.useState(-1);
    // TODO: show timer for when I can have another drink

    const calculateExpectedDrinksCount = () => {
        if (!session) {
            return -1;
        }
        const minutesSinceStart = (Date.now() - session.timeStart) / 1000 / 60;
        return Math.ceil(minutesSinceStart / session.timeInterval);
    };

    React.useEffect(()=>{
        setExpectedDrinksCount(calculateExpectedDrinksCount());
    },[session]);

    React.useEffect(() => {
        console.log('useEffect()');
        const fetchSession = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            if (newSession) {
                setSession(newSession);
            }
        };
        fetchSession();
    }, [props]);

    const onPressSetLimits = () => {
        if (!session) return;
        // props.navigation.navigate(Screens.DrinkingLimits, {
        //     sessionId: session._id,
        //     sessionTitle: session.title,
        //     initialTimeInterval: session.timeInterval,
        //     initialTotalDrinksLimit: session.drinkLimit,
        // });
        setLimitsModalOpen(true);
    };

    const openEditModal = (index: number) => {
        if (session) {
            setSelectedDrinkIndex(index);
            setEditDrinkModalOpen(true);
        }
    };

    const getSelectedDrink = () => {
        if (!session || selectedDrinkIndex == -1) {
            return null;
        }
        return session.drinks[selectedDrinkIndex];
    };

    const selectedDrink = getSelectedDrink();

    const isUniqueId = (id: string) => {
        return (
            session &&
            session.drinks.filter((drink) => drink._id === id).length === 0
        );
    };

    const onPressFinish = () => {
        setFinishModalOpen(true);
    };

    const finishSession = () => {
        if (session) {
            const timeEnd =
                session.drinks.length > 0
                    ? session.drinks[session.drinks.length - 1].timeDrank
                    : Date.now();
            session.timeEnd = timeEnd;
            saveSession(session._id, timeEnd);
        }
        props.navigation.navigate(Screens.Summary, { sessionId: session?._id });
    };

    const onPressAddDrink = () => {
        setNewDrinkModalOpen(true);
    };

    const createNewDrink = async (
        timeDrank: number,
        drinkName: string,
        drinkWeight: number
    ) => {
        console.log('createNewDrink()');
        if (!session) {
            console.log('Could not load session');
            return;
        }
        let newId = makeId();
        while (!isUniqueId(newId)) {
            newId = makeId();
        }
        const newDrink: Drink = {
            _id: newId,
            timeDrank: Number(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        const newSession = await addNewDrink(session._id, newDrink);
        setSession(newSession);
        setNewDrinkModalOpen(false);
    };

    const onDelete = async (drinkId: string) => {
        if (session) {
            const newSession = await deleteDrink(session?._id, drinkId);
            setSession(newSession);
        }
    };

    const setDrinkingLimits = async (timeInterval:number, totalDrinkLimit:number) => {
        if (!session) return;
        const newSession = await storeDrinkingLimits(session._id, timeInterval, totalDrinkLimit);
        console.log('newSession');
        console.log(newSession);
        setSession(newSession);
    };

    return (
        <StyledLayout>
            {session ?
                <>
                    <Row>
                        <BackButton onPress={() => props.navigation.goBack()} />
                        <Button onPress={onPressFinish} title="Finish" />
                    </Row>
                    <InnerLayout>
                        <Text style={styles.title}>{session.title}</Text>
                        <Banner
                            actualDrinks={session.drinks.length}
                            expectedDrinks={expectedDrinksCount}
                        />
                        <Row style={{ marginBottom: 20, marginTop: 10 }}>
                            <BigButton onPress={onPressAddDrink} label="Add drink" />
                            <View style={{ width: 10 }} />
                            <BigButton
                                onPress={onPressSetLimits}
                                label="Set Limits"
                            />
                        </Row>

                        {session.drinks && session.drinks.length > 0 ? (
                            <FlatList
                                data={session.drinks}
                                renderItem={({ item, index }) => (
                                    <DrinkItem
                                        drink={item}
                                        openModal={openEditModal}
                                        index={index}
                                        onDelete={onDelete}
                                    />
                                )}
                                keyExtractor={(item) => item._id}
                                ItemSeparatorComponent={Divider}
                            />
                        ) : (
                            <Text>You haven't drank anything yet.</Text>
                        )}

                        <FinishModal
                            open={finishModalOpen}
                            setOpen={setFinishModalOpen}
                            finishSession={finishSession}
                        />
                        <NewDrinkModal
                            open={newDrinkModalOpen}
                            setOpen={setNewDrinkModalOpen}
                            createNewDrink={createNewDrink}
                            drinkNumber={session.drinks.length + 1}
                            sessionId={session._id}
                        />
                        <DrinkingLimitsModal
                            open={limitsModalOpen}
                            setOpen={setLimitsModalOpen}
                            sessionId={session._id}
                            setDrinkingLimits={setDrinkingLimits}
                            initialTimeInterval={session.timeInterval}
                            initialTotalDrinksLimit={session.drinkLimit}
                        />
                        {selectedDrink && (
                            <EditDrinkModal
                                open={editDrinkModalOpen}
                                setOpen={setEditDrinkModalOpen}
                                drink={selectedDrink}
                                sessionId={session._id}
                            />
                        )}
                    </InnerLayout>
                </> : <Text>Loading...</Text>
            }
        </StyledLayout>
    );
};
