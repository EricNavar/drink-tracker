import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps } from '../commonTypes';

const Card = styled.TouchableOpacity({
    paddingVertical: 6,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    borderRadius: 4,
});

const CardTitle = styled.Text({
    fontWeight: 'bold',
    fontSize: 16,
});

export const SessionCard = (props: DrinkingSession & NavigationProps) => {
    const onPressCard = () => {
        console.log('on press');
    };

    const onPressDelete = () => {
        console.log('delete session');
    };

    return (
        <Card onPress={onPressCard}>
            <CardTitle>{props.title}</CardTitle>
            <Text>{props.timeStart.toDateString()} - {props.timeEnd.toDateString()}</Text>
            <Text>{props.drinks.length}</Text>
            <Button title='delete' onPress={onPressDelete} />
        </Card>
    );
};
