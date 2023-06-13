import React from 'react';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';
import { Badge, Card, Text } from 'react-native-ui-lib';
import { View } from 'react-native';

const StyledCard = styled(View)({
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

export const DrinkItem = (props: Drink) => {
    return (
        <StyledCard
            appearance="filled"
            disabled={true}
            accent={
                props.weight != 1 ? (
                    <Badge label={props.weight} size={16} />
                ) : undefined
            }
        >
            <TopRow>
                <CardTitle>{props.drinkName}&nbsp;</CardTitle>
            </TopRow>
            <Text>{props.timeDrank.toTimeString()}</Text>
            {props.weight != 1 && (
                <Text status="warning">{props.weight} std drinks</Text>
            )}
        </StyledCard>
    );
};
