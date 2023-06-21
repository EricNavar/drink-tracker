import React from 'react';
import { Button, View } from 'react-native';
import { ModalProps } from '../commonTypes';
import {
    DateTimePicker,
    Dialog,
    NumberInput,
    Text,
    TextField,
} from 'react-native-ui-lib';
import { inputStyles, modalStyles } from '../styling/commonStyles';

type DrinkInputProps = {
    drinkNumber: number;
    createNewDrink: (
        timeDrank: number,
        drinkName: string,
        drinkWeight: number
    ) => void;
    sessionId: string;
} & ModalProps;

// @react-native-community/datetimepicker

const NewDrinkModal = (props: DrinkInputProps) => {
    const [drinkName, setDrinkName] = React.useState<string>('');
    const [drinkWeight, setDrinkWeight] = React.useState<number>(1);
    const [timeDrank, setTimeDrank] = React.useState<number>(0);

    const onChangeDrinkWeight = (event: any) => {
        setDrinkWeight(event.userInput);
    };

    const onChangeTime = (event: any) => {
        console.log(event);
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    const onSubmit = () => {
        if (drinkWeight < 0) {
            console.log(
                'drink weight must be at least 0. Drink weight is currently',
                drinkWeight
            );
        }
        props.createNewDrink(timeDrank, drinkName, drinkWeight);
        closeModal();
    };

    return (
        <Dialog
            animationType="slide"
            visible={props.open}
            open={props.open}
            onDismiss={closeModal}
            height={350}
            containerStyle={modalStyles.container}
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 12,
                }}
            >
                <Button title="Submit" onPress={onSubmit} />
                <Button title="Cancel" onPress={closeModal} />
            </View>
        </Dialog>
    );
};

export { NewDrinkModal };
