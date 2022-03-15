import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNavigator from "../HomeTabNavigator/HomeTabNavigator";
import LoginScreen from "../LoginScreen/LoginScreen";
import RegistrationScreen from "../RegistrationScreen/RegistrationScreen";


const Stack = createNativeStackNavigator();

export default function Router({user}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Home">{(props) => <HomeTabNavigator {...props} extraData={user} setUser={setUser} />}</Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
