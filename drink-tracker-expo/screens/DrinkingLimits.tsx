import React from 'react';
import { Button } from 'react-native';
import { Incubator, NumberInput, Text } from 'react-native-ui-lib';
import {
    Row,
    StyledLayout,
    inputStyles,
    toastStyles,
} from '../styling/commonStyles';
import { DrinkingLimitsProps, NavigationProps, Screens } from '../commonTypes';
import { getDrinkingLimits, storeDrinkingLimits } from '../api/guestAccountAPI';

const DrinkingLimits = (props: NavigationProps) => {
    const [totalDrinkLimit, setTotalDrinksLimit] = React.useState<number>(12);
    const [timeInterval, setTimeInterval] = React.useState<number>(30);
    const [toastVisible, setToastVisible] = React.useState(false);
    const [toastText, setToastText] = React.useState('');

    const onPressSave = () => {
        if (Number(timeInterval) < 1) {
            setToastText('Time interval must be at least 1');
            setToastOpen(true);
        } else if (Number(totalDrinkLimit) < 0) {
            setToastText('Time interval must be at least 0');
            setToastOpen(true);
        } else {
            console.log('valid input');
            storeDrinkingLimits({ totalDrinkLimit, timeInterval });
        }
    };

    React.useEffect(() => {
        const fetchLimits = async () => {
            const drinkingLimits = await getDrinkingLimits();
            if (drinkingLimits) {
                setTimeInterval(drinkingLimits.timeInterval);
                setTotalDrinksLimit(drinkingLimits.totalDrinkLimit);
            } else {
                setTimeInterval(30);
                setTotalDrinksLimit(12);
            }
        };
        fetchLimits();
    }, [props]);

    const onPressBack = () => {
        props.navigation.goBack();
    };

    const onChangeTimeInterval = (event: any) => {
        setTimeInterval(event.userInput);
    };

    const onChangeTotalDrinksLimit = (event: any) => {
        setTotalDrinksLimit(event.userInput);
    };

    const { Toast } = Incubator;

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={onPressBack} />
            </Row>
            <Text text50>Set your drinking limits</Text>
            {/* I need to put almost every property for TextInput or it doesn't work */}
            <NumberInput
                key={'timeInterval'}
                initialNumber={timeInterval}
                label={'Time between drinks (in minutes)'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => {}}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={timeInterval}
                onChangeNumber={onChangeTimeInterval}
            />
            <NumberInput
                key={'totalDrinksLimit'}
                initialNumber={totalDrinkLimit}
                label={'How many drinks are you limiting yourself to?'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => {}}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={totalDrinkLimit}
                onChangeNumber={onChangeTotalDrinksLimit}
            />
            <Toast
                visible={toastVisible}
                position={'bottom'}
                autoDismiss={5000}
                containerStyle={toastStyles.container}
                onDismiss={() => {
                    setToastVisible(false);
                }}
            >
                <Text>{toastText}</Text>
            </Toast>
            <Button title="Save" onPress={onPressSave} />
        </StyledLayout>
    );
};

export { DrinkingLimits };
