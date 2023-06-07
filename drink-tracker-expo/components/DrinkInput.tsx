import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Drink } from '../commonTypes';

type DrinkInputProps = {
    drinkNumber: number;
};

const DrinkInput = (props: DrinkInputProps) => {
    const [drinkName, setDrinkName] = React.useState('');
    const [drinkWeight, setDrinkWeight] = React.useState(1);
    const [timeDrank, setTimeDrank] = React.useState('');

    const onSubmit = () => {
        if (drinkWeight >= 0) {
            console.log('drink weight must be at least 0');
        }
        const newDrink: Drink = {
            timeDrank: new Date(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        console.log(newDrink);
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.target.value);
    };

    return (
        <View>
            <Text>New drink</Text>
            <TextInput
                placeholder="name of drink"
                value={drinkName}
                onChangeText={setDrinkName}
            />
            <TextInput
                placeholder="how many drinks is this worth"
                value={drinkName}
                onChange={onChangeDrinkWeight}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="time drank"
                value={timeDrank}
                onChangeText={setTimeDrank}
            />
            <Button title="Submit" onPress={onSubmit} />
        </View>
    );
};

export { DrinkInput };
