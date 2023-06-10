import React from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { Input, Text, Modal } from '@ui-kitten/components';

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
        Alert.alert('Modal has been closed.');
        props.setOpen(!props.open);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                visible={props.open}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>New Session</Text>
                        <Input
                            value={name}
                            onChangeText={setName}
                            placeholder="Name of party"
                        />
                        <Input
                            value={startTime}
                            onChangeText={setStartTime}
                            placeholder="Time start"
                        />
                        <Button title="Start" onPress={onPressStart} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export { NewSessionDrawer };
