import React from 'react';
import { Button } from 'react-native';
import { Input } from '@ui-kitten/components';
import { StyledLayout } from '../styling/commonStyles';

const Feedback = () => {
    const [feedback, setFeedback] = React.useState('');

    const onPressSubmit = () => {
        if (feedback.trim() === '') {
            console.log('must type something to submit 😤');
        }
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
        </StyledLayout>
    );
};

export { Feedback };
