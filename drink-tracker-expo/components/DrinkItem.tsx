import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Drink } from '../commonTypes';

const Card = styled.TouchableOpacity({
    paddingVertical: 6,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    maxHWidth: '100%',
});

const CardRight = styled.View({
    flexGrow: 1,
    flexShrink: 1,
});

const Thumbnail = styled.Image({
    height: 68,
    width: 68,
    borderRadius: 4,
});

const CardTitle = styled.Text({
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
});

const TopRow = styled.Text({
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginBottom: 4,
});

const HorizontalSpace = styled.View({
    width: 16,
});

export const DrinkItem = (props: Drink) => {
    const onPressCard = () => {

    };

    return (
        <Card onPress={onPressCard}>
            <Thumbnail source={{ uri: 'https://media.tenor.com/QjkhncKynLAAAAAC/spongebob-spongebob-dancing.gif' }} />
            <HorizontalSpace />
            <CardRight>
                <TopRow>
                    <CardTitle>{props.drinkName}&nbsp;</CardTitle>
                </TopRow>
                <Text style={{color: 'white'}}>{props.drinkType}</Text>
            </CardRight>
        </Card>
    );
};
