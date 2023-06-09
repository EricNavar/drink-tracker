import React from 'react';
import {
    SessionScreen,
    Feedback,
    HomeScreen,
    Onboarding,
    DrinkingLimits,
    PrivacyPolicy,
    RecentSessions,
    Summary,
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <React.StrictMode>
            <ApplicationProvider {...eva} theme={eva.dark}>
                <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen
                            name={Screens.RecentSessions}
                            component={RecentSessions}
                        />
                        <Stack.Screen name={Screens.Home} component={HomeScreen} />
                        <Stack.Screen
                            name={Screens.DrinkingLimits}
                            component={DrinkingLimits}
                        />
                        <Stack.Screen
                            name={Screens.Feedback}
                            component={Feedback}
                        />
                        <Stack.Screen
                            name={Screens.Onboarding}
                            component={Onboarding}
                        />
                        <Stack.Screen
                            name={Screens.PrivacyPolicy}
                            component={PrivacyPolicy}
                        />

                        <Stack.Screen
                            name={Screens.Session}
                            component={SessionScreen}
                        />
                        <Stack.Screen name={Screens.Summary} component={Summary} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        </React.StrictMode>
    );
}
