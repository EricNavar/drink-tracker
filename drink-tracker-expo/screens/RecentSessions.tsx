import React from 'react';
import { sessions } from '../data/dummysessions';
import { SessionCard } from '../components/SessionCard';
import { NavigationProps } from '../commonTypes';
import { Layout } from '@ui-kitten/components';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

const StyledLayout = styled(Layout)`
    padding: 20px;
    height: 100%;
`;

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
