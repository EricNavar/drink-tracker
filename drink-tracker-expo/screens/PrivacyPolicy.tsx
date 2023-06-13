import React from 'react';
import { Button } from 'react-native';
import { StyledLayout } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps, Screens } from '../commonTypes';

const PrivacyPolicy = (props: NavigationProps) => {
    const onPressBack = () => {
        props.navigation.navigate(Screens.Settings);
    };

    return (
        <StyledLayout>
            <Button title="Back" onPress={onPressBack} />
            <Text>
                We don't share your data with any other person or company. 🤞
            </Text>
        </StyledLayout>
    );
};

export { PrivacyPolicy };
