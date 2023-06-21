import React from 'react';
import { Button } from 'react-native';
import { Row, StyledLayout } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps, Screens } from '../commonTypes';
import { BackButton } from '../components/BackButton';

const PrivacyPolicy = (props: NavigationProps) => {
    const onPressBack = () => {
        props.navigation.goBack();
    };

    return (
        <StyledLayout>
            <Row>
                <BackButton onPress={onPressBack} />
            </Row>
            <Text>
                We don't have access to or distribute your data. No pigs can
                touch your drinking data 😤
            </Text>
        </StyledLayout>
    );
};

export { PrivacyPolicy };
