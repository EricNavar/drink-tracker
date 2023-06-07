import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styling/theme';

const ScreenContainer = styled.View`
    padding: 20px;
    background-color: black;
    color: white;
    min-height: 100%;
    font-size: 20px;
`;

const DrinkingLimits = () => {
    const [timeInterval, setTimeInterval] = React.useState(30); // time between drinks, in minutes
    const [totalDrinksLimit, setTotalDrinksLimit] = React.useState(12);

    const onChangeTimeInterval = (event: any) => {
        setTimeInterval(event.target.value);
    };

    const onChangeTotalDrinksLimit = (event: any) => {
        setTotalDrinksLimit(event.target.value);
    };

    const onPressSave = () => {
        if (Number(timeInterval) < 1) {
            console.log('Time interval must be at least 1');
        }
        if (Number(totalDrinksLimit) < 0) {
            console.log('Time interval must be at least 0');
        }
        console.log('save button');
    }

    return (
        <ScreenContainer>
            <Text style={{color:theme.background.color, fontSize: 20}}>Set your drinking limits (and goals!)</Text>
            <TextInput 
                value={String(timeInterval)}
                onChange={onChangeTimeInterval}
                keyboardType='numeric'
                placeholder='Time between drinks (minutes)'
                style={{color:theme.background.color, fontSize: 20}}
            />
            <TextInput 
                value={String(totalDrinksLimit)}
                onChange={onChangeTotalDrinksLimit}
                keyboardType='numeric'
                placeholder='Total drinks limit per session'
                style={{color:theme.background.color, fontSize: 20}}
            />
            <Button title="Save" onPress={onPressSave} />
        </ScreenContainer>
    );
};

export {DrinkingLimits};
