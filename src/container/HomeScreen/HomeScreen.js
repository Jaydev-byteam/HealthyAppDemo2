import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import custom components
import PageTitle from "../../components/PageTitle/PageTitle";
import BasicButton from "../../components/BasicButton/BasicButton";

export default function HomeScreen(props) {

  // const [user, setUser] = useState(fire_auth.currentUser);
  console.log('At home screen with props:', props);
  const greeting = 'Welcome, ' + props.extraData.nickname;
  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      console.log('User signed out with info:', fire_auth.currentUser);
      // props.setUser(null);
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        {/*<Text>Home Screen</Text>*/}
        {/*<Text>Welcome, {props.extraData.nickname}</Text>*/}
        <PageTitle pageName={greeting} />
        <Text style={styles.accountInfo}>Current email: {props.extraData.email}</Text>
        <BasicButton
          buttonText={"Log out"}
          onPressButton={onLogoutPress} />
        {/*<BasicButton*/}
        {/*  buttonText="Go To Settings"*/}
        {/*  onPressButton={() => props.navigation.navigate('Settings')} />*/}
      </KeyboardAwareScrollView>
    </View>
  );
}
