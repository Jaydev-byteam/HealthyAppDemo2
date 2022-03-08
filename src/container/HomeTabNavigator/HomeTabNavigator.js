import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import components
import HomeScreen from '../HomeScreen/HomeScreen';
import BasicButton from '../../components/BasicButton/BasicButton';
import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomeTabNavigator(props) {
  function GoalsScreen() {
    return (
      <KeyboardAwareScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <PageTitle
            pageName={"Goals Page"}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name="Account"
        children={() => <HomeScreen {...props} />}
      />
      <Tab.Screen name="Goals" component={GoalsScreen} />
    </Tab.Navigator>
  );
}
