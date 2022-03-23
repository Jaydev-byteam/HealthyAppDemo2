import React, { useEffect, useState } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';
import { getUserNickname } from "../../database/FirebaseGet";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import custom components
import PageTitle from "../../components/PageTitle/PageTitle";
import BasicButton from "../../components/BasicButton/BasicButton";

export default function HomeScreen(props) {
  const [nickname, setNickname] = useState('')
  const greeting = 'Welcome, ' + nickname;
  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      console.log('User signed out with info:', fire_auth.currentUser);
    });
  };
  useEffect(() => {
    getUserNickname(setNickname);
  }, []);

  console.log('Home screen nickname:', nickname);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={greeting} />
        <Text style={styles.accountInfo}>Current email: {fire_auth.currentUser.email}</Text>
        <BasicButton
          buttonText={"Log out"}
          onPressButton={onLogoutPress} />
      </KeyboardAwareScrollView>
    </View>
  );
}
