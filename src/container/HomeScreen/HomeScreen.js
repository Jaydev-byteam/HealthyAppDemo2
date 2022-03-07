import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';

export default function HomeScreen(props) {
  console.log('Home Screen, props are:', props);

  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      console.log('User signed out!');
      props.setUser(null);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Welcome, {props.extraData.nickname}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onLogoutPress()}>
        <Text style={styles.buttonTitle}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
