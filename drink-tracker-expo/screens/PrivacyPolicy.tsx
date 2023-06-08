import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Button, View, Text } from 'react-native';

const PrivacyPolicy = () => {
    console.log('hello');
    return (
        <Layout>
            <Text>
                We don't share your data with any other person or company.
            </Text>
            <Button title="Back" />
        </Layout>
    );
};

export { PrivacyPolicy };
