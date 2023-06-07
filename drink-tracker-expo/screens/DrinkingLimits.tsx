import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

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
        <View>
            <Text>Set your drinking limits (and goals!)</Text>
            <TextInput 
                value={String(timeInterval)}
                onChange={onChangeTimeInterval}
                keyboardType='numeric'
                placeholder='Time between drinks (minutes)'
            />
            <TextInput 
                value={String(totalDrinksLimit)}
                onChange={onChangeTotalDrinksLimit}
                keyboardType='numeric'
                placeholder='Total drinks limit per session'
            />
            <Button title="Save" onPress={onPressSave} />
        </View>
    );
};

export {DrinkingLimits};
