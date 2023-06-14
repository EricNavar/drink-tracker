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
import { getSession } from '../api';

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
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
    const onPressAddDrink = () => {
        console.log('add drink');
    };

    const onPressFinish = () => {
        console.log('finishing session');
        props.navigation.navigate(Screens.Summary);
    };

    const [session, setSession] = React.useState<DrinkingSession|null>(null);
    const [expectedDrinksCount, setExpectedDrinksCount] = React.useState(0);

    const [finishModalOpen, setFinishModalOpen] = React.useState(false);
    const [newDrinkModalOpen, setNewDrinkModalOpen] = React.useState(false);
    const [editDrinkModalOpen, setEditDrinkModalOpen] = React.useState(false);
    const [selectedDrink, setSelectedDrink] = React.useState<Drink | null>(
        null
    );
    const [nextDrinkDeadline, setNextDrinkDeadline] = React.useState(0);

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

    const onCloseNewDrink = () => { };

    if (!session) {
        return <></>;
    }

    const openEditModal = (index: number) => {
        if (session) {
            setSelectedDrink(session.drinks[index]);
            setEditDrinkModalOpen(true);
        }
    }

    return (
        <StyledLayout>
            <ScrollView>
                <Row>
                    <Button onPress={()=>redirect(Screens.Home)} title="Back" />
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
                    renderItem={({item, index}) => 
                        <DrinkItem {...item} openModal={openEditModal} index={index}/>
                    }
                    keyExtractor={item => item._id}
                />
                <Text>Reminder: Try not to drink and drive 🥰</Text>
                <FinishModal
                    open={finishModalOpen}
                    setOpen={setFinishModalOpen}
                    navigation={props.navigation}
                />
                <NewDrinkModal
                    open={newDrinkModalOpen}
                    setOpen={setNewDrinkModalOpen}
                    navigation={props.navigation}
                    drinkNumber={session.drinks.length + 1}
                />
                <EditDrinkModal
                    open={editDrinkModalOpen}
                    setOpen={setEditDrinkModalOpen}
                    drink={selectedDrink}
                    sessionId={session._id}
                />
            </ScrollView>
        </StyledLayout>
    );
};
