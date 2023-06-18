import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native-ui-lib';

const BannerCard = styled.View`
    background-color: #444;
    padding: 8px;
    border-radius: 6px;
    margin-top: 8px;
    margin-bottom: 8px;
`;

type BannerProps = {
    actualDrinks: number;
    expectedDrinks: number;
};

const Banner = (props: BannerProps) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    React.useEffect(() => {
        if (props.actualDrinks === 0) {
            setTitle('Have a good night!');
            setBody(
                "It's recommended to start with shots and then move to lighter drinks like beers later"
            );
            return;
        }
        const drinkDifference = props.actualDrinks - props.expectedDrinks;

        if (drinkDifference === 0) {
            setTitle('You are on schedule.');
            setBody('Take a break.');
        } else if (drinkDifference < 0) {
            setTitle('You are behind schedule.');
            setBody('Feel free to have a drink, but no pressure');
        } else if (drinkDifference > 2) {
            setTitle('STOP DRINKING');
            setBody(
                'Give your drink to someone else and tell them to cut you off.'
            );
        } else {
            // drink difference is 1 or 2
            setTitle('You are ahead of schedule');
            setBody('Slow down there partner!');
        }
    });

    return (
        <BannerCard>
            <Text text70>{title}</Text>
            <Text>{body}</Text>
        </BannerCard>
    );
};

export { Banner };
