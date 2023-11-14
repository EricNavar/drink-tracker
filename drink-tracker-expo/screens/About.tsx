import React from 'react';
import { Alert, Button, Linking, View } from 'react-native';
import { InnerLayout, Row } from '../styling/commonStyles';
import { Text } from 'react-native-ui-lib';
import { NavigationProps } from '../commonTypes';
import { BackButton } from '../components/BackButton';
import { Layout } from '../components/Layout';

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
        props.navigation.goBack();
    };

    return (
        <Layout>
            <Row>
                <View/>
                <BackButton onPress={onPressBack} />
            </Row>
            <InnerLayout>
                <Text>
                    I appreciate your feedback! ☺{'\n\n'}
                    This is an open source project that is under active development.
                    Please provide feedback, the more detailed the better, so I can
                    improve.{'\n\n'}
                    Feel free to open a PR on the GitHub repo:
                </Text>
                <Button title="GitHub" onPress={onPressGitHub} />{/*Change this to a link button*/}
            </InnerLayout>
        </Layout>
    );
};

export { About };
