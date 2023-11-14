import React from 'react';
import { Button, Keyboard } from 'react-native';
import { Dialog, NumberInput, Text } from 'react-native-ui-lib';
import {
    Row,
    inputStyles,
    modalStyles,
} from '../styling/commonStyles';
import { ModalProps } from '../commonTypes';

type DrinkingLimitsModalProps = {
    sessionId: string;
    initialTimeInterval: number;
    initialTotalDrinksLimit: number;
    setDrinkingLimits: (timeInterval:number, totalDrinkLimit:number)=>void;
} & ModalProps;

const DrinkingLimitsModal = (props: DrinkingLimitsModalProps) => {
    const [timeInterval, setTimeInterval] = React.useState<number>(props.initialTimeInterval);
    const [totalDrinkLimit, setTotalDrinksLimit] = React.useState<number>(props.initialTotalDrinksLimit);

    const onPressSave = async () => {
        props.setDrinkingLimits(timeInterval, totalDrinkLimit);
        Keyboard.dismiss();
        closeModal();
    };

    const onChangeTimeInterval = (event: any) => {
        setTimeInterval(event.userInput);
    };

    const onChangeTotalDrinksLimit = (event: any) => {
        setTotalDrinksLimit(event.userInput);
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
            height={260}
            overlayBackgroundColor="rgba(0,0,0,.2)"
            containerStyle={modalStyles.container}
        >
            <Text text60 style={{ marginBottom: 8 }}>Set your drinking limits</Text>
            {/* I need to put almost every property for TextInput or it doesn't work */}
            <NumberInput
                key={'timeInterval'}
                initialNumber={timeInterval}
                label={'Time between drinks (in minutes)'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => { }}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={timeInterval}
                onChangeNumber={onChangeTimeInterval}
            />
            <NumberInput
                key={'totalDrinkLimit'}
                initialNumber={totalDrinkLimit}
                label={'How many drinks are you limiting yourself to?'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => { }}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={totalDrinkLimit}
                onChangeNumber={onChangeTotalDrinksLimit}
            />
            <Row>
                <Button title="Save" onPress={onPressSave} />
                <Button title="Cancel" onPress={closeModal} />
            </Row>
        </Dialog>
    );
};

export { DrinkingLimitsModal };
