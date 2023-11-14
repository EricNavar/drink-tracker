import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { DrinkItem } from '../components/DrinkItem';
import {
    Drink,
    DrinkingSession,
    NavigationProps,
    Screens,
} from '../commonTypes';
import { FinishModal } from '../components/FinishModal';
import { BigButton, InnerLayout, Row } from '../styling/commonStyles';
import { NewDrinkModal } from '../components/NewDrinkModal';
import { EditDrinkModal } from '../components/EditDrinkModal';
import { Text } from 'react-native-ui-lib';
import { addNewDrink, editDrink, getSession, endSession as saveSession } from '../api';
import { makeId } from '../util';
import { BackButton } from '../components/BackButton';
import { FlatList } from 'react-native-gesture-handler';
import { deleteDrink, storeDrinkingLimits } from '../api/guestAccountAPI';
import { DrinkingLimitsModal } from '../components/DrinkingLimitsModal';
import { Layout } from '../components/Layout';

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
    const [drinks, setDrinks] = React.useState<Drink[]>([]);
    const [timeInterval, setTimeInterval] = React.useState(1);
    const [totalDrinkLimit, setTotalDrinkLimit] = React.useState(1000);
    // const [expectedDrinksCount, setExpectedDrinksCount] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    // state for modals
    const [finishModalOpen, setFinishModalOpen] = React.useState(false);
    const [newDrinkModalOpen, setNewDrinkModalOpen] = React.useState(false);
    const [editDrinkModalOpen, setEditDrinkModalOpen] = React.useState(false);
    const [limitsModalOpen, setLimitsModalOpen] = React.useState(false);
    const [selectedDrinkIndex, setSelectedDrinkIndex] = React.useState(-1);
    // TODO: show timer for when I can have another drink

    // React.useEffect(() => {
    //     setExpectedDrinksCount(calculateExpectedDrinksCount());
    // }, [drinks, totalDrinkLimit, timeInterval]);

    let title = '';
    let timeStart = 0;
    let timeEnd: number | undefined = 0;
    let _id = '';

    React.useEffect(() => {
        console.log('useEffect()');
        const fetchSession = async () => {
            const newSession = await getSession(props.route.params.sessionId) as DrinkingSession;
            if (newSession) {
                title = newSession.title;
                timeStart = newSession.timeStart;
                timeEnd = newSession.timeEnd;
                _id = newSession._id;
                setTotalDrinkLimit(newSession.totalDrinkLimit);
                setDrinks(newSession.drinks);
                setTimeInterval(newSession.timeInterval);
                setLoading(false);
            }
        };
        fetchSession();
    }, [props]);

    // const calculateExpectedDrinksCount = () => {
    //     const minutesSinceStart = (Date.now() - timeStart) / 1000 / 60;
    //     return Math.ceil(minutesSinceStart / timeInterval);
    // };

    const onPressSetLimits = () => {
        // props.navigation.navigate(Screens.DrinkingLimits, {
        //     sessionId: _id,
        //     sessionTitle: title,
        //     initialTimeInterval: timeInterval,
        //     initialTotalDrinksLimit: drinkLimit,
        // });
        setLimitsModalOpen(true);
    };

    const onPressFinish = () => {
        setFinishModalOpen(true);
    };

    const onPressAddDrink = () => {
        setNewDrinkModalOpen(true);
    };

    const openEditModal = (index: number) => {
        setSelectedDrinkIndex(index);
        setEditDrinkModalOpen(true);
    };

    const getSelectedDrink = () => {
        if (selectedDrinkIndex == -1) {
            return null;
        }
        return drinks[selectedDrinkIndex];
    };

    const selectedDrink = getSelectedDrink();

    const isUniqueId = (id: string) => {
        return (
            drinks.filter((drink) => drink._id === id).length === 0
        );
    };

    const finishSession = () => {
        const newTimeEnd =
            drinks.length > 0
                ? drinks[drinks.length - 1].timeDrank
                : Date.now();
        timeEnd = timeEnd;
        saveSession(_id, newTimeEnd);
        props.navigation.navigate(Screens.Summary, { sessionId: _id });
    };

    const addNewDrinkHelper = async (
        timeDrank: number,
        drinkName: string,
        drinkWeight: number
    ) => {
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
        const newDrinks = await addNewDrink(_id, newDrink);
        setDrinks(newDrinks);
        setNewDrinkModalOpen(false);
    };

    const editDrinkHelper = async (editedDrink: Drink) => {
        await editDrink(_id, editedDrink);
        const newDrinks = drinks.map((drink: Drink) => drink._id === editedDrink._id ? editedDrink : drink);
        setDrinks(newDrinks);
    };

    const onDelete = async (drinkId: string) => {
        const newDrinks = await deleteDrink(_id, drinkId);
        setDrinks(newDrinks);
    };

    const setDrinkingLimits = async (timeInterval: number, totalDrinkLimit: number) => {
        const { newTotalDrinkLimit, newTimeInterval } = await storeDrinkingLimits(_id, timeInterval, totalDrinkLimit);
        setTimeInterval(newTimeInterval);
        setTotalDrinkLimit(newTotalDrinkLimit);
    };

    return (
        <Layout>
            {!loading ? (
                <>
                    <Row>
                        <BackButton onPress={() => props.navigation.goBack()} />
                        <Button onPress={onPressFinish} title="Finish" />
                    </Row>
                    <InnerLayout>
                        <Text style={styles.title}>{title}</Text>
                        {/* <Banner
                            actualDrinks={drinks.length}
                            expectedDrinks={expectedDrinksCount}
                        /> */}
                        <Row style={{ marginBottom: 20, marginTop: 10 }}>
                            <BigButton
                                onPress={onPressAddDrink}
                                label="Add drink"
                            />
                            <View style={{ width: 10 }} />
                            <BigButton
                                onPress={onPressSetLimits}
                                label="Set Limits"
                            />
                        </Row>

                        {drinks.length > 0 ? (
                            <FlatList
                                data={drinks}
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
                            createNewDrink={addNewDrinkHelper}
                            drinkNumber={drinks.length + 1}
                            sessionId={_id}
                        />
                        <DrinkingLimitsModal
                            open={limitsModalOpen}
                            setOpen={setLimitsModalOpen}
                            sessionId={_id}
                            setDrinkingLimits={setDrinkingLimits}
                            initialTimeInterval={timeInterval}
                            initialTotalDrinksLimit={totalDrinkLimit}
                        />
                        {selectedDrink && (
                            <EditDrinkModal
                                open={editDrinkModalOpen}
                                setOpen={setEditDrinkModalOpen}
                                drink={selectedDrink}
                                sessionId={_id}
                                editDrinkHelper={editDrinkHelper}
                            />
                        )}
                    </InnerLayout>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </Layout>
    );
};
