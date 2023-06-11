import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { session } from '../data/dummysessions';
import { DrinkItem } from '../components/DrinkItem';
import { Banner } from '../components/Banner';
import { Drink, DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { FinishModal } from '../components/FinishModal';
import { BigButton } from '../styling/commonStyles';
import { StyledLayout } from '../styling/commonStyles';

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

export const SessionScreen = (props: DrinkingSession & NavigationProps) => {
    const onPressAddDrink = () => {
        console.log('add drink');
    };

    const onPressFinish = () => {
        console.log('finishing session');
        props.navigation.navigate('Summary');
    };

    const [expectedDrinks, setExpectedDrinks] = React.useState(0);
    const [actualDrinks, setActualDrinks] = React.useState(0);
    const [modalOpen, setModalOpen] = React.useState(false);

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <StyledLayout>
            <ScrollView>
                <Banner actualDrinks={actualDrinks} expectedDrinks={expectedDrinks} />
                <Row>
                    <Button
                        onPress={onPressFinish}
                        title="Finish"
                    />
                </Row>
                <Row>
                    <BigButton onPress={onPressAddDrink}>Add drink</BigButton>
                    <View style={{ width: 10 }} />
                    <BigButton onPress={() => redirect(Screens.DrinkingLimits)}>
                        Set Limits
                    </BigButton>
                </Row>

                <Text style={styles.title}>{props.title}</Text>
                {session.drinks.map((drink: Drink, index: number) => (
                    <DrinkItem {...drink} />
                ))}
                <StatusBar style="auto" />
                <Text>Reminder: Try not to drink and drive  🥰</Text>
                <FinishModal open={modalOpen} setOpen={setModalOpen} navigation={props.navigation} />
            </ScrollView>
        </StyledLayout>
    );
};
