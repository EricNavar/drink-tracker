import React from 'react';
import { Button } from 'react-native';
import { Row, StyledLayout } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps, Screens } from '../commonTypes';

const PrivacyPolicy = (props: NavigationProps) => {
    const onPressBack = () => {
        props.navigation.navigate(Screens.Settings);
    };

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={onPressBack} />
            </Row>
            <Text>
                We don't share your data with any other person or company. No
                pigs can touch your data 😤
            </Text>
        </StyledLayout>
    );
};

export { PrivacyPolicy };
