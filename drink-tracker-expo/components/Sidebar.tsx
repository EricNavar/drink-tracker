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
import { NavigationProps, Screens } from '../commonTypes';

const HorizonalLine = styled.View`
    height: 1px;
    background-color: black;
`;

const Sidebar = (props: NavigationProps & { open: boolean; setOpen: any }) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
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
                        <Button
                            title="Recent Sessions"
                            onPress={() => redirect(Screens.RecentSessions)}
                        />
                        <Button
                            title="Set drinking limits"
                            onPress={() => redirect(Screens.DrinkingLimits)}
                        />
                        <HorizonalLine />
                        <Button
                            title="Privacy Policy"
                            onPress={() => redirect(Screens.PrivacyPolicy)}
                        />
                        <Button
                            title="Feedback"
                            onPress={() => redirect(Screens.Feedback)}
                        />
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => props.setOpen(true)}
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
