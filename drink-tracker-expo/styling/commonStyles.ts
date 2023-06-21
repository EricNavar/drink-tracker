import styled from 'styled-components/native';
import { Button } from 'react-native-ui-lib';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export const StyledLayout = styled(SafeAreaView)`
    height: 100%;
    background-color: black;
`;

export const InnerLayout = styled(View)`
    margin-left: 20px;
    margin-right: 20px;
    height: 100%;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    justify-content: space-between;
    width: 100%;
`;

export const BigButton = styled(Button)`
    flex-basis: 1;
    flex-grow: 1;
    border-radius: 6px;
    background-color: #95abc7;
`;

export const Divider = styled(View)`
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    wight: 100%;
`;

export const inputStyles = StyleSheet.create({
    field: {
        backgroundColor: '#444',
        marginBottom: 20,
        borderRadius: 4,
        padding: 8,
    },
});

export const toastStyles = StyleSheet.create({
    container: {
        backgroundColor: '#353740',
        borderRadius: 4,
        bottom: 50,
        height: 50,
        justifyContent: 'center',
    },
});

export const modalStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
    },
});
