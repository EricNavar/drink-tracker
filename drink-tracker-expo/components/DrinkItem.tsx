import React from 'react';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';
import { Card, Divider, Text } from '@ui-kitten/components';

const StyledCard = styled(Card)({
    marginVertical: 8,
    flexGrow: 1,
    flexShrink: 1,
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

export const DrinkItem = (props: Drink) => {
    return (
        <>
            <StyledCard appearance="filled" disabled={true}>
                <TopRow>
                    <CardTitle>{props.drinkName}&nbsp;</CardTitle>
                </TopRow>
                <Text>{props.timeDrank.toTimeString()}</Text>
                {props.weight != 1 && (
                    <Text status="warning">{props.weight} std drinks</Text>
                )}
            </StyledCard>
            <Divider />
        </>
    );
};
