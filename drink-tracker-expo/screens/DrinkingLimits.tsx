import React from 'react';
import { Button, Keyboard, StatusBar } from 'react-native';
import { Incubator, NumberInput, Text } from 'react-native-ui-lib';
import {
    InnerLayout,
    Row,
    StyledLayout,
    inputStyles,
    toastStyles,
} from '../styling/commonStyles';
import { NavigationProps } from '../commonTypes';
import { getDrinkingLimits, storeDrinkingLimits } from '../api/guestAccountAPI';
import { BackButton } from '../components/BackButton';

type DrinkingLimitsProps = {
    route: {
        params: {
            sessionId: string;
            sessionTitle: string;
            initialTimeInterval: number;
            initialTotalDrinksLimit: number;
        }
    }
} & NavigationProps;

const DrinkingLimits = (props: DrinkingLimitsProps) => {
    const [totalDrinkLimit, setTotalDrinksLimit] = React.useState<number>(12);
    const [timeInterval, setTimeInterval] = React.useState<number>(30);
    const [toastVisible, setToastVisible] = React.useState(false);
    const [toastText, setToastText] = React.useState('');

    const onPressSave = async () => {
        if (Number(timeInterval) < 1) {
            setToastText('Time interval must be at least 1');
            setToastVisible(true);
        } else if (Number(totalDrinkLimit) < 0) {
            setToastText('Time interval must be at least 0');
            setToastVisible(true);
        } else {
            await storeDrinkingLimits(props.route.params.sessionId, timeInterval, totalDrinkLimit);
            setToastText('Saved');
            setToastVisible(true);
            Keyboard.dismiss();
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
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <Row>
                <BackButton onPress={onPressBack} />
            </Row>
            <InnerLayout>
                <Text text60 style={{marginBottom:8}}>Set your drinking limits for this event</Text>
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
                    swipeable={true}
                    onDismiss={() => {
                        setToastVisible(false);
                    }}
                >
                    <Text style={{ padding: 12 }}>{toastText}</Text>
                </Toast>
                <Button title="Save" onPress={onPressSave} />
            </InnerLayout>
        </StyledLayout>
    );
};

export { DrinkingLimits };
