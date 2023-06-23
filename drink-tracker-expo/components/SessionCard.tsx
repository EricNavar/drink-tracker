import React from 'react';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { getRelativeTime } from '../util';
import { Text, ListItem, Drawer, Colors, View } from 'react-native-ui-lib';

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

type SessionCardProps = {
    onDelete: (_id: string) => void;
    session: DrinkingSession;
} & NavigationProps;

export const SessionCard = (props: SessionCardProps) => {
    const onPressCard = () => {
        // if the session has an end time, then go to the summary screen
        props.navigation.navigate(
            props.session.timeEnd ? Screens.Summary : Screens.Session,
            {
                sessionId: props.session._id,
            }
        );
    };

    return (
        <Drawer
            rightItems={[
                {
                    text: 'Delete',
                    background: Colors.red30,
                    onPress: () => props.onDelete(props.session._id),
                },
            ]}
        >
            <ListItem
                onPress={onPressCard}
                style={{ paddingVertical: 10, backgroundColor: 'black' }}
                centerV
                activeOpacity={1}
            >
                <View>
                    <CardTitle>{props.session.title}</CardTitle>
                    <Text>
                        {props.session.drinks.length}🍺 •{' '}
                        {getRelativeTime(
                            props.session.timeStart,
                            props.session.timeEnd
                        )}
                    </Text>
                </View>
            </ListItem>
        </Drawer>
    );
};
