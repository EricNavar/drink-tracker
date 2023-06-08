import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps, Screens } from '../commonTypes';
import { NewSessionDrawer } from '../components/NewSessionDrawer';
import { Sidebar } from '../components/Sidebar';
import { Layout, Text } from '@ui-kitten/components';

const Container = styled(Layout)({
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
});

export const HomeScreen = (props: NavigationProps) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    const onPressNewSession = () => {
        setModalVisible(true);
    };

    const onPressSidebar = () => {
        setSidebarVisible(true);
    };

    return (
        <Container>
            <Text>Drink Tracker</Text>
            <Button onPress={onPressNewSession} title="New Session" />
            <Button onPress={onPressSidebar} title="Sidebar" />
            <NewSessionDrawer
                open={modalVisible}
                navigation={props.navigation}
                setOpen={setModalVisible}
            />
            <Sidebar navigation={props.navigation} open={sidebarVisible} setOpen={setSidebarVisible}/>
        </Container>
    );
};
