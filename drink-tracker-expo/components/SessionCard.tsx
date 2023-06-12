import React from 'react';
import { Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { Text, Card, Divider } from '@ui-kitten/components';
import { session } from '../data/dummysessions';
import { getTimeRangeString } from '../util';
import { TouchableOpacity, View } from 'react-native-ui-lib';

const StyledCard = styled(Card)`
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
        <TouchableOpacity centerV padding-s4 bg-white style={{height: 60, backgroundColor:'black'}} onPress={onPressCard}>
            <CardTitle>{props.title}</CardTitle>
            <Text>
                {getTimeRangeString(props.timeStart, props.timeEnd)}
            </Text>
            <Text>
                {props.drinks.length}/{props.drinkLimit} drinks
            </Text>
            {props.deleteMode && (
                <Button title="delete" onPress={onPressDelete} />
            )}
        </TouchableOpacity>
    );
};
