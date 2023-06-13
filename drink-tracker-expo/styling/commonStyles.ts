import styled from 'styled-components/native';
import { Button } from 'react-native-ui-lib';
import { SafeAreaView, StyleSheet } from 'react-native';

export const StyledLayout = styled(SafeAreaView)`
    padding: 20px;
    height: 100%;
    background-color: black;
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
`;

export const inputStyles = StyleSheet.create({
    field: {
        backgroundColor: '#444',
        marginBottom: 20,
        borderRadius: 4,
        padding: 8,
    },
});
