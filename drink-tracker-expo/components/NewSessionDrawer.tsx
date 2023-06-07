import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';
import { sessions } from '../data/dummysessions';
import { Session } from './Session';

const Container = styled.View({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

export const NewSessionScreen = (props: NavigationProps) => {

    return (
        <Container>
            <Text>Drink Tracker</Text>
            <Button title='New Session' />
            <Text>Recent Sessions</Text>
            {sessions.slice(0,5).map((session, index) => 
                <Session {...session} navigation={props.navigation}/>
            )}
        </Container>
    );
}
