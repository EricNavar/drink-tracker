import React from 'react';
import { Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { Text, Card, Divider } from '@ui-kitten/components';
import { session } from '../data/dummysessions';

const StyledCard = styled(Card)`
    margin-bottom: 8px;
`;

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

export const SessionCard = (
    props: DrinkingSession & NavigationProps & { deleteMode?: boolean }
) => {
    const onPressCard = () => {
        props.navigation.navigate(Screens.Summary, {
            session: session,
        });
    };

    const onPressDelete = () => {
        console.log('delete session');
    };

    return (
        <>
            <StyledCard onPress={onPressCard} appearance="filled">
                <CardTitle>{props.title}</CardTitle>
                <Text>{getDateString()}</Text>
                <Text>
                    {props.drinks.length}/{props.drinkLimit} drinks
                </Text>
                {props.deleteMode && (
                    <Button title="delete" onPress={onPressDelete} />
                )}
            </StyledCard>
            <Divider />
        </>
    );
};
