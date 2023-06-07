import React from 'react';
import { Alert, Button, Modal, Text, TextInput } from 'react-native';
import { NavigationProps } from '../commonTypes';

export const NewSessionScreen = (props: NavigationProps) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [timeInterval, setTimeInterval] = React.useState(30);
    const [drinkLimit, setDrinkLimit] = React.useState(10);

    const onChangeTimeInterval = (event: any) => {
        setTimeInterval(Number(event.target.any));
    };

    const onChangeDrinkLimit = (event: any) => {
        setTimeInterval(Number(event.target.any));
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}
        >
            <Text>New Session</Text>
            <TextInput 
                value={name}
                onChangeText={setName}
                placeholder="Blake's birthday party"
            />
            <TextInput 
                value={startTime}
                onChangeText={setStartTime}
                placeholder="10:35"
            />
            <TextInput 
                value={String(timeInterval)}
                onChangeText={onChangeTimeInterval}
                placeholder="30"
            />
            <TextInput 
                value={String(drinkLimit)}
                onChangeText={onChangeDrinkLimit}
                placeholder="10"
            />
            <Button title='Start' />
        </Modal>
    );
}
