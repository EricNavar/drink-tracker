import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';
import { Layout } from '@ui-kitten/components';

const Container = styled(Layout)({
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
};
