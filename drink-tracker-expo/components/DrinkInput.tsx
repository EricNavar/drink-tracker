import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Drink } from '../commonTypes';

const DrinkInput = () => {
    const [drinkName, setDrinkName] = React.useState('');
    const [drinkWeight, setDrinkWeight] = React.useState(1);
    const [timeDrank, setTimeDrank] = React.useState('');

    const onSubmit = () => {
        const newDrink: Drink = {
            timeDrank: new Date(timeDrank),
            drinkName: drinkName,
            drinkType: 'liquor',
            weight: drinkWeight,
        }
        console.log(newDrink);
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.target.value);
    };

    return (
        <View>
            <Text>New drink</Text>
            <TextInput
                placeholder='name of drink'
                value={drinkName}
                onChangeText={setDrinkName}
            />
            <TextInput
                placeholder='how many drinks is this worth'
                value={drinkName}
                onChange={onChangeDrinkWeight}
                keyboardType='numeric'
            />
            <TextInput
                placeholder='time drank'
                value={timeDrank}
                onChangeText={setTimeDrank}
            />
            <Button title='submit' onPress={onSubmit}/>
        </View>
    );
};

export {DrinkInput};
