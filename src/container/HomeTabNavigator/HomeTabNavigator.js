import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import components
import HomeScreen from '../HomeScreen/HomeScreen';
import BasicButton from '../../components/BasicButton/BasicButton';

export default function HomeTabNavigator(props) {
  function GoalsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Goals!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        children={() => <HomeScreen {...props} />}
      />
      <Tab.Screen name="Goals" component={GoalsScreen} />
    </Tab.Navigator>
  );
}
