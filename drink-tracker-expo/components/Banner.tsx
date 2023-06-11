import React from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components/native';

const BannerCard = styled.View`
    background-color: #ccc;
    padding: 8px;
`;

type BannerProps = {
    actualDrinks: number;
    expectedDrinks: number;
};

const Banner = (props: BannerProps) => {
    let messageTitle = '';
    let messageBody = '';
    if (props.actualDrinks === 0) {
        messageTitle = 'Have a good night!';
        messageBody = 'It\'s recommended to start with shots and then move to lighter drinks like beers later';
        return;
    }
    const drinkDifference = props.actualDrinks - props.expectedDrinks;

    if (drinkDifference === 0) {
        messageTitle = 'You are on schedule.';
        messageBody = 'Take a break.';
    } else if (drinkDifference < 0) {
        messageTitle = 'You are behind schedule.';
        messageBody = 'Feel free to have a drink, but no pressure';
    } else if (drinkDifference > 2) {
        messageTitle = 'STOP DRINKING';
        messageBody =
            'Give your drink to someone else and tell them to cut you off.';
    } else {
        // drink difference is 1 or 2
        messageTitle = 'You are ahead of schedule';
        messageBody = 'Slow down there partner!';
    }
    return (
        <BannerCard>
            <Text>{messageTitle}</Text>
            <Text>{messageBody}</Text>
        </BannerCard>
    );
};

export { Banner };
