import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleConstants} from '../../_constants/StyleConstants';
import GoalsScreenMain from '../GoalsScreen/GoalsScreen';
import StepsScreen from '../StepsScreen/StepsScreen';
import SleepScreen from '../SleepScreen/SleepScreen';
import {log, logError} from '../../_utilities/UtilityFunctions';

export default function ComboStackNavigator(props) {
  const GoalsStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  log('In ComboStackNavigator');
  return (
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
        children={() => (
          <GoalsStack.Navigator
            initialRouteName="GoalsMain"
            screenOptions={{
              headerTransparent: true,
              headerTitle: '',
              headerBackTitle: '',
              headerTintColor: 'black',
            }}>
            <GoalsStack.Screen name="GoalsMain" component={GoalsScreenMain} />
            <GoalsStack.Screen name="Steps" component={StepsScreen} />
            <GoalsStack.Screen
              name="Sleep"
              component={SleepScreen}
              options={{headerTintColor: '#fff'}}
            />
          </GoalsStack.Navigator>
        )}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'star'} color={styleConstants.icon_color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
