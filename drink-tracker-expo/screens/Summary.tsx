import React from 'react';
import {
    Drink,
    DrinkingSession,
    NavigationProps,
    Screens,
} from '../commonTypes';
import { DrinkItem } from '../components/DrinkItem';
import { ScrollView, Button } from 'react-native';
import { getSession } from '../api';
import { Row, StyledLayout } from '../styling/commonStyles';
import { getTimeRangeString } from '../util';
import { Text } from 'react-native-ui-lib';

type SummaryProps = {
    route: {
        params: {
            sessionId: string;
        };
    };
};

const Summary = (props: SummaryProps & NavigationProps) => {
    const [session, setSession] = React.useState<DrinkingSession | null>(null);

    React.useEffect(() => {
        const fetchSession = async () => {
            const newSession = await getSession(props.route.params.sessionId);
            setSession(newSession);
        };
        fetchSession();
    });

    const getExpectedDrinksCount = () => {
        return 8; //TODO
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
            return 'right on schedule';
        }
        const difference = session.drinks.length - expectedDrinksCount;
        if (difference > 0) {
            return `${difference} more drink${
                difference > 1 ? 's' : ''
            } than expected.`;
        }
        return `${-difference} less drink${
            difference < -1 ? 's' : ''
        } than expected.`;
    };

    const onPressBack = () => {
        props.navigation.navigate(Screens.Home);
    };

    return (
        <StyledLayout>
            <ScrollView>
                <Row>
                    <Button title="Back" onPress={onPressBack} />
                </Row>
                {session ? (
                    <>
                        <Text text40>{session.title}</Text>
                        <Text>
                            {getTimeRangeString(
                                session.timeStart,
                                session.timeEnd
                            )}
                        </Text>
                        <Text>
                            You had {session.drinks.length} drinks,{' '}
                            {getMessage()}
                        </Text>
                        {session.drinks.map((drink: Drink, index: number) => (
                            <DrinkItem {...drink} key={index} />
                        ))}
                    </>
                ) : (
                    <Text>Could not load session</Text>
                )}
            </ScrollView>
        </StyledLayout>
    );
};

export { Summary };
