import React from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';

const NewSessionDrawer = (
    props: { open: boolean; setOpen: any } & NavigationProps
) => {
    const [name, setName] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [timeInterval, setTimeInterval] = React.useState('');
    const [drinkLimit, setDrinkLimit] = React.useState('');

    const onChangeTimeInterval = (event: any) => {};

    const onChangeDrinkLimit = (event: any) => {};

    const onPressStart = () => {
        props.navigation.navigate(Screens.Session);
        props.setOpen(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    props.setOpen(!props.open);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: 'white' }}>New Session</Text>
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
        backgroundColor: 'gray',
        color: 'white',
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export { NewSessionDrawer };
