import React from 'react';
import { Alert, Button, Linking } from 'react-native';
import { Text } from '@ui-kitten/components';
import { StyledLayout } from '../styling/commonStyles';

const About = () => {
    const onPressGitHub = async () => {
        const url = 'https://github.com/ericnavar/drink-tracker';
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };

    return (
        <StyledLayout>
            <Text>
                <Text>
                    I appreciate your feedback! ☺{'\n'}
                    This is an open source project that is under active
                    development. Please provide feedback, the more detailed the
                    better, so I can improve.{'\n'}
                    Feel free to open a PR on the GitHub repo:
                </Text>
            </Text>
            <Button title="GitHub" onPress={onPressGitHub} />
        </StyledLayout>
    );
};

export { About };
