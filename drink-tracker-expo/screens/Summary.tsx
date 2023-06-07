import React from 'react';
import { View, Text } from 'react-native';
import { Drink, DrinkingSession } from '../commonTypes';
import styled from 'styled-components/native';
import { DrinkItem } from '../components/DrinkItem';

const CardTitle = styled.Text({
    fontWeight: 'bold',
    fontSize: 16,
});

const Summary = (props: DrinkingSession) => {
    const getExpectedDrinksCount = () => {
        return 8;
    };

    const getMessage = () => {
        const expectedDrinksCount = getExpectedDrinksCount();
        if (expectedDrinksCount === props.drinks.length) {
            return 'You were on schedule';
        }
        const difference = props.drinks.length - expectedDrinksCount;
        if (difference > 0) {
            return `You were ${difference} drinks ahead of schedule`;
        }
        return `You were ${-difference} drinks behind schedule`;
    };

    return (
        <View>
            <CardTitle>{props.title}</CardTitle>
            <Text>
                {props.timeStart.toDateString()} -{' '}
                {props.timeEnd.toDateString()}
            </Text>
            <Text>{props.drinks.length}</Text>
            {props.drinks.map((drink: Drink, index: number) => (
                <DrinkItem {...drink} />
            ))}
            <Text>{getMessage()}</Text>
        </View>
    );
};

export { Summary };
