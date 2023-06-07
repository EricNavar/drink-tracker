import React from 'react';
import { View, Text } from 'react-native';
import { sessions } from '../data/dummysessions';
import { Session } from '../components/Session';
import { NavigationProps } from '../commonTypes';

const RecentSessions = (props: NavigationProps) => {
    return (
        <View>
            <Text>Recent Drinking Sessions</Text>
            {sessions.map((session, index) => 
                <Session {...session} navigation={props.navigation} />
            )}
        </View>
    );
};

export {RecentSessions};
