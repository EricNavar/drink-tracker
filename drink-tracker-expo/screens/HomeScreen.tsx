import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const Container = styled.View({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

export const HomeScreen = (props: NavigationProps) => {
    const onPressNewSession = () => {
        console.log('new session');
    };

    return (
        <Container>
            <Text>Drink Tracker</Text>
            <Button onPress={onPressNewSession} title='New Session' />
        </Container>
    );
}
