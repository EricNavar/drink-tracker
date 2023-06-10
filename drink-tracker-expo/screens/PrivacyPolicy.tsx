import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const StyledLayout = styled(Layout)`
    padding: 20px;
    height: 100%;
`;

const PrivacyPolicy = () => {
    return (
        <StyledLayout level={'4'}>
            <Text>
                We don't share your data with any other person or company.
            </Text>
            <Button title="Back" />
        </StyledLayout>
    );
};

export { PrivacyPolicy };
