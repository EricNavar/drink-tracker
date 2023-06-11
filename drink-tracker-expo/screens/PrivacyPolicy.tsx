import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Button } from 'react-native';

const PrivacyPolicy = () => {
    return (
        <StyledLayout level={'4'}>
            <Text>
                We don't share your data with any other person or company.
            </Text>
            <Button title="Back" />
        </StyledLayout>
    );
};

export { PrivacyPolicy };
