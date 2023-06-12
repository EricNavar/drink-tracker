import React from 'react';
import { Button } from 'react-native';
import { Input } from '@ui-kitten/components';
import { StyledLayout } from '../styling/commonStyles';
import {Incubator} from 'react-native-ui-lib';

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
    
    const {Toast} = Incubator;
    
    const sendFeedback = () => {
        console.log('submitting feedback');
    };

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
                {toastContent}
            </Toast>
        </StyledLayout>
    );
};

export { Feedback };
