import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { Row, StyledLayout } from '../styling/commonStyles';
import { ListItem } from 'react-native-ui-lib';

const Settings = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={() => redirect(Screens.Home)} />
            </Row>
            <ListItem></ListItem>
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
