import React from 'react';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { NavigationProps } from '../commonTypes';
import { Layout, Text } from '@ui-kitten/components';

const RecentSessions = (props: NavigationProps) => {
    return (
        <Layout>
            <Text>Recent Drinking Sessions</Text>
            {sessions.map((session, index) => (
                <SessionCard {...session} navigation={props.navigation} />
            ))}
        </Layout>
    );
};

export { RecentSessions };
