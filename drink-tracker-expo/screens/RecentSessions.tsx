import React from 'react';
import { View, Text } from 'react-native';
import { sessions } from '../data/dummysessions';
import { Session } from '../components/Session';

const RecentSessions = () => {
    return (
        <View>
            <Text>Recent Drinking Sessions</Text>
            {sessions.map((session, index) => 
                <Session {...session}/>
            )}
        </View>
    );
};

export {RecentSessions};
