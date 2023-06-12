import React from 'react';
import './setup';
import {
    SessionScreen,
    Feedback,
    HomeScreen,
    Onboarding,
    DrinkingLimits,
    PrivacyPolicy,
    Settings,
    Summary,
    About,
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Colors } from 'react-native-ui-lib';

const Stack = createNativeStackNavigator();

export default function App() {
    Colors.loadSchemes({
        light: {
            screenBG: Colors.grey10,
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20
        },
        dark: {
            screenBG: Colors.grey10,
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20
        }
    });

    return (
        <>
            <ApplicationProvider {...eva} theme={eva.dark}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={Screens.Home}
                            component={HomeScreen}
                        />
                        <Stack.Screen
                            name={Screens.Settings}
                            component={Settings}
                        />
                        <Stack.Screen
                            name={Screens.DrinkingLimits}
                            component={DrinkingLimits}
                        />
                        <Stack.Screen
                            name={Screens.Feedback}
                            component={Feedback}
                        />
                        <Stack.Screen
                            name={Screens.PrivacyPolicy}
                            component={PrivacyPolicy}
                        />
                        <Stack.Screen
                            name={Screens.Session}
                            component={SessionScreen}
                        />
                        <Stack.Screen
                            name={Screens.Summary}
                            component={Summary}
                        />
                        <Stack.Screen
                            name={Screens.About}
                            component={About}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        </>
    );
}
