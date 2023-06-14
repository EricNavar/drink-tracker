import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { getTimeRangeString } from '../util';
import { TouchableOpacity, Text, ListItem, Drawer, Colors, View } from 'react-native-ui-lib';

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

export const SessionCard = (
    props: DrinkingSession & NavigationProps & { deleteMode?: boolean }
) => {
    const onPressDelete = () => {
        console.log('delete session');
    };

    const onPressCard = (session: DrinkingSession) => {
        props.navigation.navigate(Screens.Summary, {
            session: session,
        });
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
        >
            <ListItem
                onPress={onPressCard}
                style={{paddingVertical: 10}}
                centerV
            >
                <View>
                    <CardTitle>{props.title}</CardTitle>
                    <Text>
                        {props.drinks.length}🍺 • {getTimeRangeString(props.timeStart, props.timeEnd)}
                    </Text>
                </View>
            </ListItem>
        </Drawer>
    );
};
