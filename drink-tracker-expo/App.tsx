import React from 'react';
import './setup';
import {
    SessionScreen,
    Feedback,
    HomeScreen,
    DrinkingLimits,
    PrivacyPolicy,
    Settings,
    Summary,
    About,
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { Colors, Assets } from 'react-native-ui-lib';
import { Debug } from './screens/DebugScreen';

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
            $backgroundSuccessLight: Colors.green20,
        },
        dark: {
            screenBG: Colors.grey10,
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
    });

    Assets.loadAssetsGroup('icons', {
        drink: require('./assets/icons/ios-wine-bar-50.png'),
        back: require('./assets/icons/ios-back-50.png'),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={Screens.Home} component={HomeScreen} />
                <Stack.Screen name={Screens.Debug} component={Debug} />
                <Stack.Screen name={Screens.Settings} component={Settings} />
                <Stack.Screen name={Screens.Feedback} component={Feedback} />
                <Stack.Screen
                    name={Screens.PrivacyPolicy}
                    component={PrivacyPolicy}
                />
                <Stack.Screen
                    name={Screens.Session}
                    component={SessionScreen}
                />
                <Stack.Screen name={Screens.Summary} component={Summary} />
                <Stack.Screen name={Screens.About} component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
