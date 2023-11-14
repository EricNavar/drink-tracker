import React from 'react';
import { Button } from 'react-native';
import { NavigationProps, Screens } from '../commonTypes';
import { getAllSessions, storeSessionsLocally } from '../api';
import { sessions } from '../data/dummysessions';
import { Layout } from '../components/Layout';

const Debug = (props: NavigationProps) => {
    const storeDummySessions = () => {
        storeSessionsLocally(sessions);
    };

    const consoleLogAllSessions = async () => {
        const sessions = await getAllSessions(0);
        console.log(sessions);
        console.log(sessions.length);
    };

    const redirect = (page: string) => {
        props.navigation.navigate(page);
    };

    return (
        <Layout>

            <Button title="store dummy sessions" onPress={storeDummySessions} />
            <Button
                title="console log all stored sessions"
                onPress={consoleLogAllSessions}
            />
            <Button
                title="Home screen"
                onPress={() => redirect(Screens.Home)}
            />
        </Layout>
    );
};

export { Debug };
