import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PostSplashNavigator} from '../PostSplashNavigator/PostSplashNavigator';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import SplashPage from '../SplashPage/SplashPage';

export default function Router({isSignedIn}) {
  const Stack = createNativeStackNavigator();
  console.log('In Router');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashPage'}
        screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Stack.Screen name="Home">
            {props => <PostSplashNavigator {...props} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="SplashPage" component={SplashPage} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
