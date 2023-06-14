import React from 'react';
import { Button } from 'react-native';
import { ModalProps, NavigationProps, Screens } from '../commonTypes';
import { DateTimePicker, Dialog, Text, TextField } from 'react-native-ui-lib';
import { inputStyles } from '../styling/commonStyles';

const NewSessionDrawer = (props: ModalProps & NavigationProps) => {
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState('');

    const onPressStart = () => {

        props.navigation.navigate(Screens.Session, {});
        props.setOpen(false);
    };

    const closeModal = () => {
        props.setOpen(!props.open);
    };

    return (
        <Dialog
            animationType="slide"
            visible={props.open}
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
            <Text text40>New Session</Text>
            <TextField
                label="Name of party"
                value={name}
                onChangeText={setName}
                placeholder={'Ryan\'s birthday party'}
                fieldStyle={inputStyles.field}
            />
            <DateTimePicker
                label={'Select time'}
                placeholder={'10:35'}
                mode={'time'}
                value={startTime}
                fieldStyle={inputStyles.field}
            />
            <Button title="Start" onPress={onPressStart} />
        </Dialog>
    );
};

export { NewSessionDrawer };
