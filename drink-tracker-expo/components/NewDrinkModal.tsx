import React from 'react';
import { Button } from 'react-native';
import { Drink, NavigationProps, Screens } from '../commonTypes';
import { Dialog, NumberInput, Text, TextField } from 'react-native-ui-lib';
import { inputStyles } from '../styling/commonStyles';

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
            timeDrank: Number(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        props.navigation.navigate(Screens.Session, { drink: newDrink });
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.target.value);
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    return (
        <Dialog open={props.open} onDismiss={closeModal}>
            <Text>New drink</Text>
            <TextField
                placeholder="name of drink"
                value={drinkName}
                onChangeText={setDrinkName}
                fieldStyle={inputStyles.field}
            />
            <TextField
                placeholder="time drank"
                value={timeDrank}
                onChangeText={setTimeDrank}
                fieldStyle={inputStyles.field}
            />
            <NumberInput
                placeholder="how many drinks is this worth"
                value={drinkName}
                onChange={onChangeDrinkWeight}
                fieldStyle={inputStyles.field}
            />
            <Button title="Submit" onPress={onSubmit} />
            <Button title="Cancel" onPress={closeModal} />
        </Dialog>
    );
};

export { NewDrinkModal };
