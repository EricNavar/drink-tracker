import React from 'react';
import { Button } from 'react-native';
import { Drink } from '../commonTypes';
import {
    DateTimePicker,
    Dialog,
    NumberInput,
    Text,
    TextField,
} from 'react-native-ui-lib';
import { inputStyles } from '../styling/commonStyles';

type DrinkInputProps = {
    drinkNumber: number;
    open: boolean;
    setOpen: any;
    sessionId: string;
};

// @react-native-community/datetimepicker

const NewDrinkModal = (props: DrinkInputProps) => {
    const [drinkName, setDrinkName] = React.useState<string>('');
    const [drinkWeight, setDrinkWeight] = React.useState<number>(1);
    const [timeDrank, setTimeDrank] = React.useState<number>(0);

    const onSubmit = () => {
        if (drinkWeight < 0) {
            console.log(
                'drink weight must be at least 0. Drink weight is currently',
                drinkWeight
            );
        }
        const newDrink: Drink = {
            _id: 'u432819',
            timeDrank: Number(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        closeModal();
    };

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.userInput);
    };

    const onChangeTime = (event: any) => {
        console.log(event);
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    return (
        <Dialog
            animationType="slide"
            visible={props.open}
            open={props.open}
            onDismiss={closeModal}
            height={'100%'}
            containerStyle={{
                backgroundColor: '#000',
                padding: 20,
                borderRadius: 8,
                height: '100%',
            }}
            overlayBackgroundColor="rgba(0,0,0,.2)"
        >
            <Text text50 style={{ marginBottom: 10 }}>
                New drink
            </Text>
            <TextField
                label="Name of drink"
                placeholder="Mojito"
                value={drinkName}
                onChangeText={setDrinkName}
                fieldStyle={inputStyles.field}
            />
            <DateTimePicker
                label="time drank"
                placeholder="10:35"
                mode={'time'}
                value={timeDrank}
                onChange={onChangeTime}
                fieldStyle={inputStyles.field}
            />
            <NumberInput
                key={'drinkWeight'}
                initialNumber={drinkWeight}
                label={'How many drinks is this worth?'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => {}}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={drinkWeight}
                onChangeNumber={onChangeDrinkWeight}
            />
            <Button title="Submit" onPress={onSubmit} />
            <Button title="Cancel" onPress={closeModal} />
        </Dialog>
    );
};

export { NewDrinkModal };
