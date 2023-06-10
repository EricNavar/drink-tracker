import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../styling/theme';
import { Input, Layout, Text } from '@ui-kitten/components';

const ScreenContainer = styled(Layout)`
    padding: 20px;
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
    };

    return (
        <ScreenContainer>
            <Text>Set your drinking limits (and goals!)</Text>
            <Input
                value={String(timeInterval)}
                onChange={onChangeTimeInterval}
                keyboardType="numeric"
                placeholder="Time between drinks (minutes)"
                style={{ fontSize: 20 }}
            />
            <Input
                value={String(totalDrinksLimit)}
                onChange={onChangeTotalDrinksLimit}
                keyboardType="numeric"
                placeholder="Total drinks limit per session"
                style={{ color: theme.background.color, fontSize: 20 }}
            />
            <Button title="Save" onPress={onPressSave} />
        </ScreenContainer>
    );
};

export { DrinkingLimits };
