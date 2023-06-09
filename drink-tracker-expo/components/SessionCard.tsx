import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { Text, Card, Divider } from '@ui-kitten/components';

// const Card = styled.TouchableOpacity({
//     paddingVertical: 6,
//     marginVertical: 8,
//     display: 'flex',
//     flexDirection: 'row',
//     maxWidth: '100%',
//     borderRadius: 4,
// });

const StyledCard = styled(Card)`
    margin-bottom: 8px;
`;

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

export const SessionCard = (props: DrinkingSession & NavigationProps & {deleteMode?: boolean}) => {
    const onPressCard = () => {
        props.navigation.navigate(Screens.Summary);
    };

    const onPressDelete = () => {
        console.log('delete session');
    };

    const getDateString = () => {
        return `${props.timeStart.toTimeString()} - ${props.timeEnd.toTimeString()}`;
    };

    return (
        <>
            <StyledCard onPress={onPressCard}>
                <CardTitle>{props.title}</CardTitle>
                <Text>{getDateString()}</Text>
                <Text>{props.drinks.length}/{props.drinkLimit} drinks</Text>
                {props.deleteMode && <Button title="delete" onPress={onPressDelete} />}
            </StyledCard>
            <Divider />
        </>
    );
};
