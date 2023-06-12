import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';
import { StyledLayout } from '../styling/commonStyles';

export const Onboarding = (props: NavigationProps) => {
    return (
        <StyledLayout>
            <Text>Drink Tracker</Text>
        </StyledLayout>
    );
};
