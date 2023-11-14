import React from 'react';
import { Button } from 'react-native-ui-lib';

// This will appear as a text button on both iOS and Android.
export const TextButton = (props: { onPress: any, label: string }) => {
    return (
        <Button
            onPress={props.onPress}
            labelStyle={{ fontSize: 18 }}
            label={props.label}
            avoidInnerPadding
            backgroundColor="transparent"
            color="#0070f2"
        />
    );
};
