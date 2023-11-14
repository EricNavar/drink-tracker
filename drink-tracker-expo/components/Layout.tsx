import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled(SafeAreaView)`
    height: 100%;
    background-color: black;
`;

export const Layout = (props: {children:JSX.Element | JSX.Element[]}) => {
    return (
        <StyledView>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            {props.children}
        </StyledView>
    )
};
