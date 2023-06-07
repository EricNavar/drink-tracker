import React, { useCallback } from 'react';
import { Alert, Button, Linking, Text, TextInput, View } from 'react-native';

const Feedback = () => {
    const [feedback, setFeedback] = React.useState('');

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

    const onPressSubmit = () => {
        if (feedback.trim() === '') {
            console.log('must type something to submit 😤');
        }
        console.log('submitting feedback');
    };

    return (
        <View>
            <Text>I appreciate your feedback! ☺</Text>
            <Text>
                This is an open source project that is under active development.
                Please provide feedback, the more detailed the better, so I can
                improve.
            </Text>
            <Text>Feel free to open a PR on the GitHub repo: </Text>
            <Button title="GitHub" onPress={onPressGitHub} />
            <TextInput value={feedback} onChangeText={setFeedback} />
            <Button title="Submit" onPress={onPressSubmit} />
        </View>
    );
};

export { Feedback };
