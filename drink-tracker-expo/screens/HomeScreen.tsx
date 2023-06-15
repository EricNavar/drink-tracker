import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { NewSessionDrawer } from '../components/NewSessionDrawer';
import { SessionCard } from '../components/SessionCard';
import { BigButton, Divider, Row, StyledLayout } from '../styling/commonStyles';
import { Chip, Text, View } from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';
import { getAllSessions } from '../api';

export const HomeScreen = (props: NavigationProps) => {
    const [sessions, setSessions] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        const fetchSessions = async () => {
            const newSessions = await getAllSessions();
            setSessions(newSessions);
        };
        fetchSessions();
    }, [props]);

    const onPressNewSession = () => {
        setModalVisible(true);
    };

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    const onDelete = () => {
        console.log('delete');
    }

    return (
        <StyledLayout>
            <Row>
                <View />
                <Button
                    onPress={() => redirect(Screens.Settings)}
                    title="Settings"
                />
            </Row>
            <Row>
                <BigButton onPress={onPressNewSession} label="New Session" />
                <View style={{ width: 10 }} />
                <BigButton
                    onPress={() => redirect(Screens.DrinkingLimits)}
                    label="Set Limits"
                />
            </Row>
            <Text text40 style={{ marginTop: 20 }}>
                Recent
            </Text>

            <FlatList
                data={sessions}
                renderItem={({ item }) => (
                    <SessionCard
                        {...item}
                        navigation={props.navigation}
                    />
                )}
                keyExtractor={item => item._id}
                ItemSeparatorComponent={Divider}
            />
            <NewSessionDrawer
                open={modalVisible}
                navigation={props.navigation}
                setOpen={setModalVisible}
            />
        </StyledLayout>
    );
};
