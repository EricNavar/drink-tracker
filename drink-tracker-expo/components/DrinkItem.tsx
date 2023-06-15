import React from 'react';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';
import {
    Badge,
    Chip,
    Colors,
    Spacings,
    Text,
    TouchableOpacity,
} from 'react-native-ui-lib';
import { getTimeString } from '../util';
import { View } from 'react-native';

const StyledCard = styled(TouchableOpacity)({
    marginVertical: 8,
    flexGrow: 1,
    flexShrink: 1,
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
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
    openModal: (index: number) => void;
    index: number;
} & Drink;

export const DrinkItem = (props: DrinkItemProps) => {
    return (
        <StyledCard
            onPress={() => props.openModal(props.index)}
            backgroundColor={Colors.grey10}
        >
            <TopRow>
                <CardTitle>{props.drinkName}&nbsp;</CardTitle>
            </TopRow>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                }}
            >
                <Text>{getTimeString(props.timeDrank)}</Text>
                {props.weight != 1 && (
                    <View style={{ flexDirection: 'row' }}>
                        <Chip
                            label={`${props.weight} standard drinks`}
                            disabled
                            labelStyle={{ color: Colors.white }}
                            iconProps={{ tintColor: Colors.white }}
                            containerStyle={{
                                borderColor: Colors.grey30,
                                backgroundColor: Colors.grey30,
                                marginLeft: Spacings.s3,
                            }}
                        />
                    </View>
                )}
            </View>
        </StyledCard>
    );
};
