import React from 'react';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { NavigationProps } from '../commonTypes';
import { ScrollView } from 'react-native';
import { StyledLayout } from '../styling/commonStyles';

const RecentSessions = (props: NavigationProps) => {
    return (
        <StyledLayout>
            <ScrollView>
                {sessions.map((session, index) => (
                    <SessionCard
                        {...session}
                        navigation={props.navigation}
                        key={index}
                    />
                ))}
            </ScrollView>
        </StyledLayout>
    );
};

export { RecentSessions };
