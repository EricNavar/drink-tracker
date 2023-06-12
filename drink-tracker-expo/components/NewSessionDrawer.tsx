import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { Input } from '@ui-kitten/components';
import { DateTimePicker, Dialog, Text } from 'react-native-ui-lib';

const NewSessionDrawer = (
    props: { open: boolean; setOpen: any } & NavigationProps
) => {
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    // const [timeInterval, setTimeInterval] = React.useState('');
    // const [drinkLimit, setDrinkLimit] = React.useState('');

    // const onChangeTimeInterval = (event: any) => {};

    // const onChangeDrinkLimit = (event: any) => {};

    const onPressStart = () => {
        props.navigation.navigate(Screens.Session);
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
            height={200}
            containerStyle={{ backgroundColor: 'black', padding: 20, borderRadius: 8 }}
            overlayBackgroundColor='rgba(0,0,0,.2)'
        >
            <Text>New Session</Text>
            <Input
                value={name}
                onChangeText={setName}
                placeholder="Name of party"
            />
            <DateTimePicker label={'Select time'} placeholder={'Time start'} mode={'time'} value={startTime} />
            <Button title="Start" onPress={onPressStart} />
        </Dialog>
    );
};

export { NewSessionDrawer };
