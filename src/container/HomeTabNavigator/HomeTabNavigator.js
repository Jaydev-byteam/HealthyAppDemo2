import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// import components
import HomeScreen from '../HomeScreen/HomeScreen';
import GoalsScreenNav from '../GoalsScreenNav/GoalsScreenNav';

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
        children={() => <GoalsScreenNav {...props} />}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'star'} color={'#708090'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
