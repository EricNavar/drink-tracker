import React from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps, Screens } from '../commonTypes';
import { NewSessionDrawer } from '../components/NewSessionDrawer';
import { Layout, Text } from '@ui-kitten/components';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { BigButton, Row } from '../styling/commonStyles';

const StyledLaylout = styled(Layout)({
    flex: 1,
    padding: 20,
    height: '100%',
});

export const HomeScreen = (props: NavigationProps) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const onPressNewSession = () => {
        setModalVisible(true);
    };

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <StyledLaylout>
            <Row>
                <Button onPress={() => {}} title="Edit" />
                <Button
                    onPress={() => redirect(Screens.Settings)}
                    title="Settings"
                />
            </Row>
            <Row>
                <BigButton onPress={onPressNewSession}>New Session</BigButton>
                <View style={{ width: 10 }} />
                <BigButton onPress={() => redirect(Screens.DrinkingLimits)}>
                    Set Limits
                </BigButton>
            </Row>
            <Text category='h5' style={{marginTop: 20}}>Recent</Text>
            {sessions.map((session, index) => (
                <SessionCard
                    {...session}
                    navigation={props.navigation}
                    key={index}
                />
            ))}
            <NewSessionDrawer
                open={modalVisible}
                navigation={props.navigation}
                setOpen={setModalVisible}
            />
        </StyledLaylout>
    );
};
