import React from 'react';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';
import { Badge, Text } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native';
import { getTimeString } from '../util';

const StyledCard = styled(TouchableOpacity)({
    marginVertical: 8,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'darkblue',
    padding: 8,
    borderRadius: 6,
});

const CardTitle = styled(Text)({
    fontWeight: 'bold',
    fontSize: 16,
});

const TopRow = styled(Text)({
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginBottom: 4,
});

const StyledBadge = styled(Badge)`
    position: absolute;
    top: -8px;
    right: -8px;
`;

type DrinkItemProps = {
    openModal: (index: number)=>void,
    index: number,
} & Drink;

export const DrinkItem = (props: DrinkItemProps) => {
    return (
        <StyledCard onPress={()=>props.openModal(props.index)}>
            {props.weight > 1 && <StyledBadge label={String(props.weight)} size={16} />}
            <TopRow>
                <CardTitle>{props.drinkName}&nbsp;</CardTitle>
            </TopRow>
            <Text>{getTimeString(props.timeDrank)}</Text>
            {props.weight != 1 && (
                <Text status="warning">{props.weight} stanard drinks</Text>
            )}
        </StyledCard>
    );
};
