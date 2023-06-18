import React from 'react';
import { Button, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { DrinkItem } from '../components/DrinkItem';
import { Banner } from '../components/Banner';
import {
    Drink,
    DrinkingSession,
    NavigationProps,
    Screens,
} from '../commonTypes';
import { FinishModal } from '../components/FinishDialog';
import { BigButton } from '../styling/commonStyles';
import { StyledLayout } from '../styling/commonStyles';
import { NewDrinkModal } from '../components/NewDrinkModal';
import { EditDrinkModal } from '../components/EditDrinkModal';
import { Text } from 'react-native-ui-lib';
import { addNewDrink, endSession as saveSession } from '../api';
import { makeId } from '../util';

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

type SessionScreenProps = {
    route: {
        params: {
            session: DrinkingSession;
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

    // React.useEffect(() => {
    //     const fetchSessions = async () => {
    //         const newSession = await getSession(props.route.params.sessionId);
    //         if (newSession) {
    //             setSession(newSession);
    //         }
    //     };
    //     fetchSessions();
    // }, [props]);

    React.useEffect(() => {
        if (props.route.params.session) {
            setSession(props.route.params.session);
        } else {
            console.log('session was not passed to navigation props');
        }
    });

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
        props.navigation.navigate(Screens.Summary, { session: session });
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

    if (!session) {
        return <Text>could not load session</Text>;
    }
    return (
        <StyledLayout>
            <Row>
                <Button
                    onPress={() => props.navigation.goBack()}
                    title="Back"
                />
                <Button onPress={onPressFinish} title="Finish" />
            </Row>
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
                            {...item}
                            openModal={openEditModal}
                            index={index}
                        />
                    )}
                    keyExtractor={(item) => item._id}
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
        </StyledLayout>
    );
};
