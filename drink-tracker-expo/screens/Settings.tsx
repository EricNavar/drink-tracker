import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { StyledLayout } from '../styling/commonStyles';

const Settings = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <StyledLayout>
            <Button title="About" onPress={() => redirect(Screens.About)} />
            {/* <Button
                title="Feedback"
                onPress={() => redirect(Screens.Feedback)}
            /> */}
            <Button
                title="Privacy Policy"
                onPress={() => redirect(Screens.PrivacyPolicy)}
            />
        </StyledLayout>
    );
};

export { Settings };
