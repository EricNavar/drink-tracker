import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { session } from '../data/dummysessions';
import { DrinkItem } from '../components/DrinkItem';
import { Banner } from '../components/Banner';
import { Drink, DrinkingSession, NavigationProps } from '../commonTypes';

const Container = styled.View({
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
});

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
});

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

    return (
        <ScrollView>
            <Container>
                <Banner drinkDifference={actualDrinks - expectedDrinks} />
                <Text style={styles.title}>{props.title}</Text>
                {session.drinks.map((drink: Drink, index: number) => (
                    <DrinkItem {...drink} />
                ))}
                <Button onPress={onPressAddDrink} title="Add drink" />
                <StatusBar style="auto" />
                <Text style={{ color: 'white' }} status='primary'>
                    Try not to drink and drive
                </Text>
                <Button title="finish the session" onPress={onPressFinish} />
            </Container>
        </ScrollView>
    );
};
