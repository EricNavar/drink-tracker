import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Drink, NavigationProps, Screens } from '../commonTypes';
import { Text } from '@ui-kitten/components';

type DrinkInputProps = {
    drinkNumber: number;
    open: boolean;
    setOpen: any;
} & NavigationProps;

const NewDrinkModal = (props: DrinkInputProps) => {
    const [drinkName, setDrinkName] = React.useState('');
    const [drinkWeight, setDrinkWeight] = React.useState(1);
    const [timeDrank, setTimeDrank] = React.useState('');

    const onSubmit = () => {
        if (drinkWeight >= 0) {
            console.log('drink weight must be at least 0');
        }
        const newDrink: Drink = {
            _id: 'u432819',
            timeDrank: new Date(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        props.navigation.navigate(Screens.Session, {drink: newDrink});
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.target.value);
    };

    const closeModal = () => {
        props.setOpen(false);
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
                placeholder="time drank"
                value={timeDrank}
                onChangeText={setTimeDrank}
            />
            <TextInput
                placeholder="how many drinks is this worth"
                value={drinkName}
                onChange={onChangeDrinkWeight}
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={onSubmit} />
            <Button title="Cancel" onPress={closeModal} />
        </View>
    );
};

export { NewDrinkModal };
