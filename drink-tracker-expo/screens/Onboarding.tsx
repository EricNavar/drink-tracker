import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const Container = styled.View({
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
});

export const Onboarding = (props: NavigationProps) => {
    return (
        <Container>
            <Text>Drink Tracker</Text>
        </Container>
    );
}
