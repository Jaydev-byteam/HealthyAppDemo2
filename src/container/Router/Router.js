import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import HomeScreen from "../HomeScreen/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import GoalsScreenNav from "../GoalsScreenNav/GoalsScreenNav";
import { styleConstants } from "../../_constants/StyleConstants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router({isSignedIn}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{headerShown: false}}>
        { isSignedIn ? (
          <Stack.Screen name="Home">
            {props => (
              //
              <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen
                  name="Account"
                  children={() => <HomeScreen {...props} />}
                  options={{
                    tabBarIcon: ({size, color}) => (
                      <Icon name={'home'} color={styleConstants.icon_color} size={30} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Goals"
                  children={() => <GoalsScreenNav {...props} />}
                  options={{
                    tabBarIcon: ({size, color}) => (
                      <Icon name={'star'} color={styleConstants.icon_color} size={30} />
                    ),
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
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
