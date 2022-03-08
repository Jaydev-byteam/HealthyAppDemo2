import { fstore, fire_auth } from './database/FirebaseDefault';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./container/LoginScreen/LoginScreen";
import RegistrationScreen from "./container/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./container/HomeScreen/HomeScreen";
import HomeTabNavigator from "./container/HomeTabNavigator/HomeTabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // if (loading) {
  //   return (
  //     <></>
  //   )
  // }

  useEffect(() => {
    let isMounted = true;
    const usersRef = fstore.collection('users');
    fire_auth.onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => { isMounted = false };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
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
