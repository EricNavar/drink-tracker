import React from 'react';
import { Row } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps } from '../commonTypes';
import { BackButton } from '../components/BackButton';
import { Layout } from '../components/Layout';

const PrivacyPolicy = (props: NavigationProps) => {
    const onPressBack = () => {
        props.navigation.goBack();
    };

    return (
        <Layout>
            <Row>
                <BackButton onPress={onPressBack} />
            </Row>
            <Text>
                We don't have access to or distribute your data. No pigs can
                touch your drinking data 😤
            </Text>
        </Layout>
    );
};

export { PrivacyPolicy };
