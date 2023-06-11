import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Drink } from '../commonTypes';
import { Text } from '@ui-kitten/components';
import { editDrink } from '../api/api';

type EditDrinkModalProps = {
    sessionId: string;
    drink: Drink | null;
    open: boolean;
    setOpen: any;
};

const EditDrinkModal = (props: EditDrinkModalProps) => {
    const [drinkName, setDrinkName] = React.useState(props.drink.drinkName);
    const [drinkWeight, setDrinkWeight] = React.useState(props.drink.weight);
    const [timeDrank, setTimeDrank] = React.useState(props.drink.timeDrank);

    const onPressSave = () => {
        if (drinkWeight >= 0) {
            console.log('drink weight must be at least 0');
        }
        const newDrink: Drink = {
            ...props.drink,
            timeDrank: new Date(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        editDrink(props.sessionId, props.drink._id);
        console.log(newDrink);
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.target.value);
    };

    const onChangeTimeDrank = (event: any) => {
        setTimeDrank(event.target.value)
    }

    const closeModal = () => {
        props.setOpen(false);
    };

    return (
        <View>
            <Text>Edit {props.drink.drinkName}</Text>
            <TextInput
                placeholder="name of drink"
                value={drinkName}
                onChangeText={setDrinkName}
            />
            <TextInput
                placeholder="time drank"
                value={String(timeDrank)}
                onChangeText={onChangeTimeDrank}
            />
            <TextInput
                placeholder="how many drinks is this worth"
                value={drinkName}
                onChange={onChangeDrinkWeight}
                keyboardType="numeric"
            />
            <Button title="Save" onPress={onPressSave} />
            <Button title="Cancel" onPress={closeModal} />
        </View>
    );
};

export { EditDrinkModal };
