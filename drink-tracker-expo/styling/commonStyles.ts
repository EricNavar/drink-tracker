import styled from 'styled-components/native';
import { Layout } from '@ui-kitten/components';
import { Button } from 'react-native-ui-lib';

export const StyledLayout = styled(Layout)`
    padding: 20px;
    height: 100%;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    justify-content: space-between;
    width: 100%;
`;

export const BigButton = styled(Button)`
    flex-basis: 1;
    flex-grow: 1;
`;
