import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { Divider, Row, StyledLayout } from '../styling/commonStyles';
import { ListItem, Text } from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';

const Settings = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    const data = [
        {
            buttonTitle: 'About',
            screenTitle: Screens.About
        },
        {
            buttonTitle: 'Feedback',
            screenTitle: Screens.Feedback
        },
        {
            buttonTitle: 'Privacy Policy',
            screenTitle: Screens.PrivacyPolicy
        }
    ]

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={() => redirect(Screens.Home)} />
            </Row>
            <FlatList
                data={data}
                keyExtractor={item => item.screenTitle}
                style={{
                    backgroundColor: 'blue',
                    borderRadius: 6,
                }}
                renderItem={({ item }) => (
                    <ListItem onPress={() => redirect(item.screenTitle)}>
                        <Text>{item.buttonTitle}</Text>
                    </ListItem>
                )}
                ItemSeparatorComponent={Divider}
            />

            <Button title="About" onPress={() => redirect(Screens.About)} />
            <Button
                title="Feedback"
                onPress={() => redirect(Screens.Feedback)}
            />
            <Button
                title="Privacy Policy"
                onPress={() => redirect(Screens.PrivacyPolicy)}
            />
        </StyledLayout>
    );
};

export { Settings };
