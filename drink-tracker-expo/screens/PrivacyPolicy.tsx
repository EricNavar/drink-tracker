import React from 'react';
import {Button, View, Text} from 'react-native';

const PrivacyPolicy = () => {
    console.log('hello');
    return (
        <View>
            <Text>We don't share your data with any other person or company.</Text>
            <Button title="Back" />
        </View>
    );
};

export {PrivacyPolicy};
