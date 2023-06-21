import React from 'react';
import { Button } from 'react-native';
import {
    DrinkingSession,
    ModalProps,
    NavigationProps,
    Screens,
} from '../commonTypes';
import { DateTimePicker, Dialog, Text, TextField } from 'react-native-ui-lib';
import { inputStyles, modalStyles } from '../styling/commonStyles';

type NewSessionModalProps = {
    createNewSession: (title: string, startTIme: number) => void;
} & ModalProps;

const NewSessionModal = (props: NewSessionModalProps) => {
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState<number>(Date.now());

    const onPressStart = () => {
        props.createNewSession(name, startTime);
    };

    const closeModal = () => {
        props.setOpen(!props.open);
    };

    return (
        <Dialog
            animationType="slide"
            visible={props.open}
            onDismiss={closeModal}
            height={250}
            containerStyle={modalStyles.container}
            overlayBackgroundColor="rgba(0,0,0,.2)"
        >
            <Text text50 style={{ marginBottom: 8 }}>
                New Session
            </Text>
            <TextField
                label="Name of party"
                value={name}
                onChangeText={setName}
                placeholder={"Ryan's birthday party"}
                fieldStyle={inputStyles.field}
            />
            <DateTimePicker
                label={'Select time'}
                placeholder={'10:35 PM'}
                mode={'time'}
                value={new Date(startTime)}
                fieldStyle={inputStyles.field}
            />
            <Button title="Start" onPress={onPressStart} />
        </Dialog>
    );
};

export { NewSessionModal };
