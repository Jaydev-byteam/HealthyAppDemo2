import {fstore, fire_auth} from './database/FirebaseDefault';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './container/LoginScreen/LoginScreen';
import RegistrationScreen from './container/RegistrationScreen/RegistrationScreen';
import HomeTabNavigator from './container/HomeTabNavigator/HomeTabNavigator';
import Router from './container/Router/Router';
import {MDHealthKitManager} from './_utilities/HealthKit';
import BasicButton from "./components/BasicButton/BasicButton";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    return fire_auth.onAuthStateChanged(onAuthStateChangedListener);
  }, []);
  // handle user state change
  const onAuthStateChangedListener = user => {
    setIsSignedIn(!!user);
    if (loading) {
      setLoading(false);
    }
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Router isSignedIn={isSignedIn} />
      <BasicButton
        buttonText={"Allow Permissions"}
        onPressButton={() => MDHealthKitManager.requestAuthorization()}
      />
    </>
  );
}
