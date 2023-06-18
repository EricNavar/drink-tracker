import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { getRelativeTime, getTimeRangeString } from '../util';
import {
    TouchableOpacity,
    Text,
    ListItem,
    Drawer,
    Colors,
    View,
} from 'react-native-ui-lib';

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

export const SessionCard = (
    props: NavigationProps & { deleteMode?: boolean; session: DrinkingSession }
) => {
    const onPressDelete = () => {
        console.log('delete session');
    };

    const onPressCard = () => {
        // if the session has an end time, then go to the summary screen
        props.navigation.navigate(
            props.session.timeEnd ? Screens.Summary : Screens.Session,
            {
                session: props.session,
            }
        );
    };

    return (
        <Drawer
            rightItems={[
                {
                    text: 'Delete',
                    background: Colors.red30,
                    onPress: () => console.log('delete pressed'),
                },
            ]}
            style={{ backgroundColor: 'black' }} //TODO: fix this
        >
            <ListItem
                onPress={onPressCard}
                style={{ paddingVertical: 10 }}
                centerV
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
