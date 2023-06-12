import React from 'react';
import { Drink, DrinkingSession } from '../commonTypes';
import { DrinkItem } from '../components/DrinkItem';
import { Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import { getSession } from '../api/api';
import { StyledLayout } from '../styling/commonStyles';
import { getTimeRangeString } from '../util';

type SummaryProps = {
    route: {
        params: {
            sessionId: string;
        };
    };
};

const Summary = (props: SummaryProps) => {
    const [session, setSession] = React.useState<DrinkingSession | null>(null);

    React.useEffect(() => {
        const fetchSession = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            setSession(newSession);
        };
        fetchSession();
    });

    const getExpectedDrinksCount = () => {
        return 8;
    };

    const getMessage = () => {
        if (!session) {
            return '';
        }
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

    if (!session) {
        return <></>;
    }

    return (
        <StyledLayout>
            <ScrollView>
                <Text category="h3">{session.title}</Text>
                <Text>{getTimeRangeString(session.timeStart, session.timeEnd)}</Text>
                <Text>You had {session.drinks.length} drinks.</Text>
                <Text>{getMessage()}</Text>
                {session.drinks.map((drink: Drink, index: number) => (
                    <DrinkItem {...drink} key={index} />
                ))}
            </ScrollView>
        </StyledLayout>
    );
};

export { Summary };
