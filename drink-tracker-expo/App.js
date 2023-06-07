import React from 'react';
import { SessionScreen } from './screens/SessionScreen';
import { Feedback } from './screens/Feedback';
import { PrivacyPolicy } from './screens/PrivacyPolicy';
import { Summary } from './screens/Summary';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrinkingLimits } from './screens/DrinkingLimits';
import { HomeScreen } from './screens/HomeScreen';
import { Onboarding } from './screens/Onboarding';
import { RecentSessions } from './screens/RecentSessions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.StrictMode>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.DrinkingLimits} component={DrinkingLimits} />
          <Stack.Screen name={Screens.Feedback} component={Feedback} />
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
          <Stack.Screen name={Screens.PrivacyPolicy} component={PrivacyPolicy} />
          <Stack.Screen name={Screens.Summary} component={RecentSessions} />
          <Stack.Screen name={Screens.Session} component={SessionScreen} />
          <Stack.Screen name={Screens.Summary} component={Summary} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
}
