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
import { BigButton, InnerLayout } from '../styling/commonStyles';
import { StyledLayout } from '../styling/commonStyles';
import { NewDrinkModal } from '../components/NewDrinkModal';
import { EditDrinkModal } from '../components/EditDrinkModal';
import { Text } from 'react-native-ui-lib';
import { addNewDrink, getSession, endSession as saveSession } from '../api';
import { makeId } from '../util';
import { BackButton } from '../components/BackButton';
import { FlatList } from 'react-native-gesture-handler';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { deleteDrink } from '../api/guestAccountAPI';

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 16,
    },
});

const Row = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    justify-content: space-between;
    width: 100%;
`;

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
    const [selectedDrinkIndex, setSelectedDrinkIndex] = React.useState(-1);
    // const [nextDrinkDeadline, setNextDrinkDeadline] = React.useState(0);

    React.useEffect(() => {
        console.log('useEffect()');
        const fetchSessions = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            if (newSession) {
                setSession(newSession);
            }
        };
        fetchSessions();
    }, [props]);

    const redirect = (page: string) => {
        props.navigation.navigate(page);
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

    const onPressAddDrink = () => {
        setNewDrinkModalOpen(true);
    };

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

    const createNewDrink = async (
        timeDrank: number,
        drinkName: string,
        drinkWeight: number
    ) => {
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
        addNewDrink(session._id, newDrink);
        setNewDrinkModalOpen(false);
    };

    const onDelete = async (drinkId: string) => {
        if (session) {
            const newSession = await deleteDrink(session?._id, drinkId);
            setSession(newSession);
        }
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
                                onPress={() => redirect(Screens.DrinkingLimits)}
                                label="Set Limits"
                            />
                        </Row>

                        {session.drinks.length > 0 ? (
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
                                // ItemSeparatorComponent={TestComponent}
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
