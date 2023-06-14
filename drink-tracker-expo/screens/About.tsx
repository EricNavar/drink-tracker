import React from 'react';
import { Alert, Button, Linking } from 'react-native';
import { StyledLayout } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps, Screens } from '../commonTypes';

const About = (props: NavigationProps) => {
    const onPressGitHub = async () => {
        const url = 'https://github.com/ericnavar/drink-tracker';
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Could not open URL: ${url}`);
        }
    };

    const onPressBack = () => {
        props.navigation.navigate(Screens.Settings);
    };

    return (
        <StyledLayout>
            <Button title="Back" onPress={onPressBack} />
            <Text>
                I appreciate your feedback! ☺{'\n\n'}
                This is an open source project that is under active development.
                Please provide feedback, the more detailed the better, so I can
                improve.{'\n\n'}
                Feel free to open a PR on the GitHub repo:
            </Text>
            <Button title="GitHub" onPress={onPressGitHub} />
        </StyledLayout>
    );
};

export { About };
