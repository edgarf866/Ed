import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './LoginPage';
import { HomeScreen } from './HomeScreen';
import PhoneNumberPage from './PhoneNumberPage';
import RegistrationScreen from './RegistrationScreen';
import PublicationPage from './PublicationPage';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Simulate loading time for the splash screen
    setTimeout(() => {
      setAppIsReady(true);
    }, 5000);
  }, []);

  if (!appIsReady) {
    // Return the splash screen while the app is loading
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false, headerStyle: { backgroundColor: 'blue' } }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, title: 'Accueil' }}
        />
        <Stack.Screen
          name="PhoneNumberPage"
          component={PhoneNumberPage}
          options={{ title: 'Mot de Passe Oublié' }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ title: 'Inscription' }}
        />
        <Stack.Screen
          name="PublicationPage"
          component={PublicationPage}
          options={{ title: 'Publication' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
