import React from 'react';
import { Assets, Button } from 'react-native-ui-lib';

export const BackButton = (props: { onPress: any }) => {
    return (
        <Button
            onPress={props.onPress}
            style={{ marginBottom: 10 }}
            labelStyle={{ fontSize: 18 }}
            label="Back"
            avoidInnerPadding
            backgroundColor="transparent"
            color="#0070f2"
            iconSource={Assets.icons.back}
            iconStyle={{ height: 20, width: 20 }}
        />
    );
};
