import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

// import components
import HomeScreen from '../HomeScreen/HomeScreen';
import PageTitle from '../../components/PageTitle/PageTitle';
import GoalsScreen from "../GoalsScreen/GoalsScreen";

export default function HomeTabNavigator(props) {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Account"
        children={() => <HomeScreen {...props} />}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} color={'#708090'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        children={() => <GoalsScreen {...props} />}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'star'} color={'#708090'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
