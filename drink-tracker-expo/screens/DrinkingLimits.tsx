import React from 'react';
import { Button } from 'react-native';
import { NumberInput, Text } from 'react-native-ui-lib';
import { Row, StyledLayout, inputStyles } from '../styling/commonStyles';
import { NavigationProps, Screens } from '../commonTypes';

const DrinkingLimits = (props: NavigationProps) => {
    const [totalDrinksLimit, setTotalDrinksLimit] = React.useState(12);
    const [timeInterval, setTimeInterval] = React.useState(30);

    const onPressSave = () => {
        if (Number(timeInterval) < 1) {
            console.log('Time interval must be at least 1');
        }
        if (Number(totalDrinksLimit) < 0) {
            console.log('Time interval must be at least 0');
        }
        console.log('save button');
    };

    const onPressBack = () => {
        props.navigation.navigate(Screens.Settings);
    };

    return (
        <StyledLayout>
            <Row>
                <Button title="Back" onPress={onPressBack} />
            </Row>
            <Text text40>Set your drinking limits</Text>
            {/* I need to put almost every property for TextInput or it doesn't work */}
            <NumberInput
                key={'timeInterval'}
                // initialNumber={1}
                label={'Time between drinks'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => {}}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={timeInterval}
                onChangeNumber={setTimeInterval}
            />
            <NumberInput
                key={'totalDrinksLimit'}
                // initialNumber={totalDrinksLimit}
                label={'How many drinks are you limiting yourself to?'}
                fractionDigits={2}
                style={{}}
                containerStyle={{}}
                validate={() => {}}
                validationMessage={'validationMessage'}
                validationMessageStyle={{}}
                validateOnChange
                fieldStyle={inputStyles.field}
                value={totalDrinksLimit}
                onChangeNumber={setTotalDrinksLimit}
            />
            <Button title="Save" onPress={onPressSave} />
        </StyledLayout>
    );
};

export { DrinkingLimits };
