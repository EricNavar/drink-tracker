import React from 'react';
import { Button } from 'react-native';
import { StyledLayout, toastStyles } from '../styling/commonStyles';
import { Incubator, Text, TextField } from 'react-native-ui-lib';

const Feedback = () => {
    const [feedback, setFeedback] = React.useState('');
    const [toastVisible, setToastVisible] = React.useState(false);
    const [toastContent, setToastContent] = React.useState('');

    const onPressSubmit = () => {
        if (feedback.trim() === '') {
            setToastContent('Must type something to submit 😤');
            setToastVisible(true);
            return;
        }
        sendFeedback();
        setToastContent('Thank you for your feedback!');
        setToastVisible(true);
    };

    const { Toast } = Incubator;

    const sendFeedback = () => {
        console.log('submitting feedback');
    };

    return (
        <StyledLayout>
            <TextField
                value={feedback}
                onChangeText={setFeedback}
                placeholder="type your feedback"
                multiline={true}
            />
            <Button title="Submit" onPress={onPressSubmit} />
            <Toast
                visible={toastVisible}
                position={'bottom'}
                autoDismiss={5000}
                containerStyle={toastStyles.container}
                onDismiss={() => {
                    setToastVisible(false);
                }}
            >
                <Text>{toastContent}</Text>
            </Toast>
        </StyledLayout>
    );
};

export { Feedback };
