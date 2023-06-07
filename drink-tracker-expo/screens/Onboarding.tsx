import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Onboarding = (props: NavigationProps) => {

  return (
    <Container>
        <Text>Drink Tracker</Text>
    </Container>
  );
}
