import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Button,
} from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const HorizonalLine = styled.View`
    height: 1px;
    background-color: black;
`;

const Sidebar = (props: NavigationProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Button
                            title="Recent Sessions"
                            onPress={() => redirect('recent')}
                        />
                        <Button
                            title="Set drinking limits"
                            onPress={() => redirect('set limits')}
                        />
                        <HorizonalLine />
                        <Button
                            title="Privacy Policy"
                            onPress={() => redirect('privacy policy')}
                        />
                        <Button
                            title="Feedback"
                            onPress={() => redirect('feedback')}
                        />
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
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
        backgroundColor: 'white',
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

export { Sidebar };
