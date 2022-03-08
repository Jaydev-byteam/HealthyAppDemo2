import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import custom components
import PageTitle from "../../components/PageTitle/PageTitle";
import BasicButton from "../../components/BasicButton/BasicButton";

export default function HomeScreen(props) {
  console.log('Home Screen, props are:', props);
  const greeting = 'Welcome, ' + props.extraData.nickname;
  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      console.log('User signed out!');
      props.setUser(null);
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        {/*<Text>Home Screen</Text>*/}
        {/*<Text>Welcome, {props.extraData.nickname}</Text>*/}
        <PageTitle pageName={greeting} />
        <BasicButton
          buttonText="Log out"
          onPressButton={onLogoutPress} />
      </KeyboardAwareScrollView>
    </View>
  );
}
