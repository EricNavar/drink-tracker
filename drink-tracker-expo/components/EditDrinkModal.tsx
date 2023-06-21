import React from 'react';
import { Button, View } from 'react-native';
import { Drink } from '../commonTypes';
import {
    DateTimePicker,
    Dialog,
    NumberInput,
    Text,
    TextField,
} from 'react-native-ui-lib';
import { editDrink } from '../api';
import { inputStyles, modalStyles } from '../styling/commonStyles';
import { getTimeString, getTimeStringFromDate } from '../util';

type EditDrinkModalProps = {
    sessionId: string;
    drink: Drink;
    open: boolean;
    setOpen: any;
};

const EditDrinkModal = (props: EditDrinkModalProps) => {
    const [drinkName, setDrinkName] = React.useState<string>(
        props.drink ? props.drink.drinkName : ''
    );

    const [drinkWeight, setDrinkWeight] = React.useState<number>(
        props.drink ? props.drink.weight : 1
    );

    const [timeDrank, setTimeDrank] = React.useState<number>(
        props.drink ? props.drink.timeDrank : 0
    );

    React.useEffect(() => {
        if (props.drink) {
            setDrinkWeight(props.drink?.weight);
        } else {
            console.log('props.drink does not exist');
        }
    }, [props]);

    const onPressSave = () => {
        if (!props.drink) return;
        if (drinkWeight < 0) {
            console.log(
                'drink weight must be at least 0. Drink weight is currently',
                drinkWeight
            );
            return;
        }
        const newDrink: Drink = {
            ...props.drink,
            timeDrank: Number(timeDrank),
            drinkName: drinkName,
            weight: drinkWeight,
        };
        editDrink(props.sessionId, props.drink._id);
        closeModal();
        console.log(newDrink);
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
            height={350}
            containerStyle={modalStyles.container}
            overlayBackgroundColor="rgba(0,0,0,.2)"
        >
            {props.drink ? (
                <>
                    <Text text50 style={{ marginBottom: 10 }}>
                        Edit {props.drink.drinkName}
                    </Text>
                    <TextField
                        label="Name of drink"
                        placeholder="Mojito"
                        value={drinkName}
                        onChangeText={setDrinkName}
                        fieldStyle={inputStyles.field}
                    />
                    <DateTimePicker
                        label="Time drank"
                        placeholder="10:35"
                        mode={'time'}
                        value={new Date(timeDrank)}
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
                        <Button title="Save" onPress={onPressSave} />
                        <Button title="Cancel" onPress={closeModal} />
                    </View>
                </>
            ) : (
                <Text>Could not load drink</Text>
            )}
        </Dialog>
    );
};

export { EditDrinkModal };
