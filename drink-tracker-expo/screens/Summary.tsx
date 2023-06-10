import React from 'react';
import { Drink, DrinkingSession } from '../commonTypes';
import styled from 'styled-components/native';
import { DrinkItem } from '../components/DrinkItem';
import { Layout, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import { DrinkList } from '../components/DrinkList';

const StyledLayout = styled(Layout)`
    padding: 20px;
    height: 100%;
`;

type SummaryProps = {
    route: {
        params: {
            session: DrinkingSession;
        };
    };
} & DrinkingSession;

const Summary = (props: SummaryProps) => {
    const [session, setSession] = React.useState(props.route.params.session);

    const getExpectedDrinksCount = () => {
        return 8;
    };

    const getMessage = () => {
        const expectedDrinksCount = Math.max(
            getExpectedDrinksCount(),
            session.drinkLimit
        );
        if (expectedDrinksCount === session.drinks.length) {
            return 'You were on schedule';
        }
        const difference = session.drinks.length - expectedDrinksCount;
        if (difference > 0) {
            return `You had ${difference} more drink${
                difference > 1 ? 's' : ''
            } than expected.`;
        }
        return `You had ${-difference} less drink${
            difference < -1 ? 's' : ''
        } than expected.`;
    };

    const getDateString = () => {
        if (!session.timeStart || !session.timeEnd) {
            return '';
        }
        return `${session.timeStart.toTimeString()} - ${session.timeEnd.toTimeString()}`;
    };

    if (!session) {
        return <></>;
    }

    return (
        <StyledLayout>
            <Text category="h3">{session.title}</Text>
            <Text>{getDateString()}</Text>
            <Text>You had {session.drinks.length} drinks.</Text>
            <Text>{getMessage()}</Text>
            {session.drinks.map((drink: Drink, index: number) => (
                <DrinkItem {...drink} key={index} />
            ))}
            {/* <DrinkList drinks={session.drinks}/> */}
        </StyledLayout>
    );
};

export { Summary };
