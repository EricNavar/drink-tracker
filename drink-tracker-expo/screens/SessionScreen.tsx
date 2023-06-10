import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { session } from '../data/dummysessions';
import { DrinkItem } from '../components/DrinkItem';
import { Banner } from '../components/Banner';
import { Drink, DrinkingSession, NavigationProps } from '../commonTypes';
import { Layout } from '@ui-kitten/components';

const Container = styled(Layout)({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
});

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

const StyledLaylout = styled(Layout)({
    flex: 1,
    padding: 20,
    height: '100%',
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
        <StyledLaylout>
            <ScrollView>
                <Banner drinkDifference={actualDrinks - expectedDrinks} />
                <Button onPress={onPressAddDrink} title="Add drink" />
                <Text style={styles.title}>{props.title}</Text>
                {session.drinks.map((drink: Drink, index: number) => (
                    <DrinkItem {...drink} />
                ))}
                <StatusBar style="auto" />
                <Text>Try not to drink and drive</Text>
                <Button title="finish the session" onPress={onPressFinish} />
            </ScrollView>
        </StyledLaylout>
    );
};
