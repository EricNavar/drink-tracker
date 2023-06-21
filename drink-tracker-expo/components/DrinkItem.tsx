import React from 'react';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';
import {
    Badge,
    Chip,
    Colors,
    Drawer,
    ListItem,
    Spacings,
    Text,
} from 'react-native-ui-lib';
import { getTimeString } from '../util';
import { View } from 'react-native';

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
    onDelete:(drinkId:string)=>void;
    drink: Drink;
};

export const DrinkItem = (props: DrinkItemProps) => {
    return (
        <Drawer
            rightItems={[
                {
                    text: 'Delete',
                    background: Colors.red30,
                    onPress: () => props.onDelete(props.drink._id),
                },
            ]}
        >
            <ListItem
                onPress={() => props.openModal(props.index)}
                style={{ paddingVertical: 10, backgroundColor: 'black' }}
                centerV
                activeOpacity={1}
            >
                <View>
                    <TopRow>
                        <CardTitle>{props.drink.drinkName}&nbsp;</CardTitle>
                    </TopRow>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 4,
                        }}
                    >
                        <Text>{getTimeString(props.drink.timeDrank)}</Text>
                        {props.drink.weight != 1 && (
                            <View style={{ flexDirection: 'row' }}>
                                <Chip
                                    label={`${props.drink.weight} standard drinks`}
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
                </View>
            </ListItem>
        </Drawer>
    );
};
