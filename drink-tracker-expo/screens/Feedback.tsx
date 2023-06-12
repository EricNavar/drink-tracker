import React from 'react';
import { Button } from 'react-native';
import { Input } from '@ui-kitten/components';
import { StyledLayout } from '../styling/commonStyles';
import {Incubator, Toast} from 'react-native-ui-lib';

const Feedback = () => {
    const [feedback, setFeedback] = React.useState('');
    const [toastVisible, setToastVisible] = React.useState(false);

    const onPressSubmit = () => {
        if (feedback.trim() === '') {
            console.log('must type something to submit 😤');
        }
        console.log('submitting feedback');
    };

    const {Toast} = Incubator;

    return (
        <StyledLayout>
            <Input
                value={feedback}
                onChangeText={setFeedback}
                placeholder="type your feedback"
                multiline={true}
            />
            <Button title="Submit" onPress={onPressSubmit} />
            <Toast
                visible={toastVisible}
                position={'top'}
                autoDismiss={5000}
                onDismiss={()=>{setToastVisible(false)}}
            >
                Thank you for your feedback!
            </Toast>
        </StyledLayout>
    );
};

export { Feedback };
