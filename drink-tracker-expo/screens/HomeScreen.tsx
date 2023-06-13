import React from 'react';
import { Button } from 'react-native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { NewSessionDrawer } from '../components/NewSessionDrawer';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { BigButton, Row, StyledLayout } from '../styling/commonStyles';
import { Colors, Drawer, ListItem, Text, View } from 'react-native-ui-lib';

export const HomeScreen = (props: NavigationProps) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const onPressNewSession = () => {
        setModalVisible(true);
    };

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    const onPressCard = (session: DrinkingSession) => {
        console.log('card');
        props.navigation.navigate(Screens.Summary, {
            session: session,
        });
    };

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
            {sessions.map((session, index) => (
                <Drawer
                    rightItems={[
                        {
                            text: 'Delete',
                            background: Colors.red30,
                            onPress: () => console.log('delete pressed'),
                        },
                    ]}
                    key={index}
                >
                    <ListItem onPress={() => onPressCard(session)}>
                        <SessionCard
                            {...session}
                            navigation={props.navigation}
                            key={index}
                        />
                    </ListItem>
                </Drawer>
            ))}
            <NewSessionDrawer
                open={modalVisible}
                navigation={props.navigation}
                setOpen={setModalVisible}
            />
        </StyledLayout>
    );
};
