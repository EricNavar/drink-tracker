import React from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../commonTypes';

const HorizonalLine = styled.View`
    height: 1px;
    background-color: black;
`;

const Sidebar = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    }

    return (
        <View>
            <Button title='Recent Sessions' onPress={()=>redirect('recent')} />
            <Button title='Set drinking limits' onPress={()=>redirect('set limits')} />
            <HorizonalLine />
            <Button title='Privacy Policy' onPress={()=>redirect('privacy policy')} />
            <Button title='Feedback' onPress={()=>redirect('feedback')} />
        </View>
    );
};

export {Sidebar};
