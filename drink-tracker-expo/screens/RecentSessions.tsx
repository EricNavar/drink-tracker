import React from 'react';
import { View, Text } from 'react-native';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { NavigationProps } from '../commonTypes';

const RecentSessions = (props: NavigationProps) => {
    return (
        <View>
            <Text>Recent Drinking Sessions</Text>
            {sessions.map((session, index) => 
                <SessionCard {...session} navigation={props.navigation} />
            )}
        </View>
    );
};

export {RecentSessions};
