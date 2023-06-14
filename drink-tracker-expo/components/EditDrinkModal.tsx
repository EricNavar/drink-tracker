import React from 'react';
import { Button } from 'react-native';
import { Drink } from '../commonTypes';
import { editDrink } from '../api';
import { Dialog, Text, TextField } from 'react-native-ui-lib';
import { inputStyles } from '../styling/commonStyles';

type EditDrinkModalProps = {
    sessionId: string;
    drink: Drink | null;
    open: boolean;
    setOpen: any;
};

const EditDrinkModal = (props: EditDrinkModalProps) => {
    const [drinkName, setDrinkName] = React.useState(
        props.drink ? props.drink.drinkName : ''
    );
    const [drinkWeight, setDrinkWeight] = React.useState(
        props.drink ? props.drink.weight : 1
    );
    const [timeDrank, setTimeDrank] = React.useState(
        props.drink ? props.drink.timeDrank : ''
    );

    const onPressSave = () => {
        if (!props.drink) return;
        if (drinkWeight >= 0) {
            console.log('drink weight must be at least 0');
        }
        const newDrink: Drink = {
            ...props.drink,
            timeDrank: Number(timeDrank),
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
        setTimeDrank(event.target.value);
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    if (!props.drink) return <></>;

    return (
        <Dialog visible={props.open} overlayBackgroundColor="#000">
            <Text>Edit {props.drink.drinkName}</Text>
            <TextField
                placeholder="name of drink"
                value={drinkName}
                onChangeText={setDrinkName}
                fieldStyle={inputStyles.field}
            />
            <TextField
                placeholder="time drank"
                value={String(timeDrank)}
                onChangeText={onChangeTimeDrank}
                fieldStyle={inputStyles.field}
            />
            <TextField
                placeholder="how many drinks is this worth"
                value={drinkName}
                onChange={onChangeDrinkWeight}
                keyboardType="numeric"
                fieldStyle={inputStyles.field}
            />
            <Button title="Save" onPress={onPressSave} />
            <Button title="Cancel" onPress={closeModal} />
        </Dialog>
    );
};

export { EditDrinkModal };
