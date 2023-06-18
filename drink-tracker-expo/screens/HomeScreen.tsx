import React from 'react';
import { Button } from 'react-native';
import { DrinkingSession, NavigationProps, Screens } from '../commonTypes';
import { NewSessionModal } from '../components/NewSessionModal';
import { SessionCard } from '../components/SessionCard';
import { BigButton, Divider, Row, StyledLayout } from '../styling/commonStyles';
import { Text, View } from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';
import { addNewSession, getAllSessions } from '../api';
import { makeId } from '../util';

export const HomeScreen = (props: NavigationProps) => {
    const [sessions, setSessions] = React.useState<DrinkingSession[]>([]);
    const [modalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        const fetchSessions = async () => {
            const newSessions = await getAllSessions();
            newSessions.sort((a: DrinkingSession, b: DrinkingSession) =>
                a.timeStart > b.timeStart ? -1 : 1
            );
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

    const onDeleteSession = () => {
        console.log('delete');
    };

    const isUniqueId = (id: string) => {
        return sessions.filter((session) => session._id === id).length === 0;
    };

    const createNewSession = async (titleInput: string, timeStart: number) => {
        let newId = makeId();
        while (!isUniqueId(newId)) {
            newId = makeId();
        }
        let sessionTitle =
            titleInput.trim() === ''
                ? `Drinking Session #${sessions.length + 1}`
                : titleInput.trim();
        const newSession = await addNewSession(newId, sessionTitle, timeStart);
        if (!newSession) {
            console.log('could not add new session');
            return;
        }
        const newSessionsState = [newSession, ...sessions];
        setSessions(newSessionsState);
        setModalVisible(false);
        props.navigation.navigate(Screens.Session, { session: newSession });
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
            {sessions && sessions.length > 0 ? (
                <>
                    <Text text50 style={{ marginTop: 20 }}>
                        Recent
                    </Text>

                    <FlatList
                        data={sessions}
                        renderItem={({ item }) => (
                            <SessionCard
                                session={item}
                                navigation={props.navigation}
                            />
                        )}
                        keyExtractor={(item) => item._id}
                        ItemSeparatorComponent={Divider}
                    />
                    <NewSessionModal
                        open={modalVisible}
                        setOpen={setModalVisible}
                        createNewSession={createNewSession}
                    />
                </>
            ) : (
                <Text style={{ marginTop: 20 }}>
                    No recent drinking sessions
                </Text>
            )}
        </StyledLayout>
    );
};
