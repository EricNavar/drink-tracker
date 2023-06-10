import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps, Screens } from '../commonTypes';
import { Divider, Layout } from '@ui-kitten/components';

const StyledLayout = styled(Layout)`
    padding: 20px;
    height: 100%;
`;

const Settings = (props: NavigationProps) => {
    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <StyledLayout>
            <Button title="About" onPress={() => redirect(Screens.About)} />
            <Button
                title="Feedback"
                onPress={() => redirect(Screens.Feedback)}
            />
            <Button
                title="Privacy Policy"
                onPress={() => redirect(Screens.PrivacyPolicy)}
            />
        </StyledLayout>
    );
};

export { Settings };
