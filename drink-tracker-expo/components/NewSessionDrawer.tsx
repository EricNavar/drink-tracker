import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const Container = styled.View({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

export const NewSessionScreen = (props: NavigationProps) => {
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [timeInterval, setTimeInterval] = React.useState(30);
    const [drinkLimit, setDrinkLimit] = React.useState(10);

    const onChangeTimeInterval = (event: any) => {
        setTimeInterval(Number(event.target.any));
    };

    const onChangeDrinkLimit = (event: any) => {
        setTimeInterval(Number(event.target.any));
    };

    return (
        <Container>
            <Text>New Session</Text>
            <TextInput 
                value={name}
                onChangeText={setName}
                placeholder="Blake's birthday party"
            />
            <TextInput 
                value={startTime}
                onChangeText={setStartTime}
                placeholder="10:35"
            />
            <TextInput 
                value={String(timeInterval)}
                onChangeText={onChangeTimeInterval}
                placeholder="30"
            />
            <TextInput 
                value={String(drinkLimit)}
                onChangeText={onChangeDrinkLimit}
                placeholder="10"
            />
            <Button title='Start' />
        </Container>
    );
}
