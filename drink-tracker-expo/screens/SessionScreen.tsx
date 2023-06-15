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
import { Chip, Text } from 'react-native-ui-lib';
import { getSession } from '../api';

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
        const fetchSessions = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            setSession(newSession);
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

    const onPressFinish = () => {
        props.navigation.navigate(Screens.Summary);
    };

    if (!session) {
        return <></>;
    }

    return (
        <StyledLayout>
            <Row>
                <Button onPress={() => redirect(Screens.Home)} title="Back" />
                <Button onPress={onPressFinish} title="Finish" />
            </Row>
            <Banner
                actualDrinks={session.drinks.length}
                expectedDrinks={expectedDrinksCount}
            />
            <Row>
                <BigButton onPress={onPressAddDrink} label="Add drink" />
                <View style={{ width: 10 }} />
                <BigButton
                    onPress={() => redirect(Screens.DrinkingLimits)}
                    label="Set Limits"
                />
            </Row>

            <Text style={styles.title}>{session.title}</Text>
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

            <FinishModal
                open={finishModalOpen}
                setOpen={setFinishModalOpen}
                navigation={props.navigation}
            />
            <NewDrinkModal
                open={newDrinkModalOpen}
                setOpen={setNewDrinkModalOpen}
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
