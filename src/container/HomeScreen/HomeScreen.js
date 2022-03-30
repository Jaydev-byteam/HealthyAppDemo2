import React, {useEffect, useState, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';
import {getUserNickname} from '../../database/FirebaseGet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {userObject} from '../../_constants/EmptyObjectConstants';
import {AppState} from 'react-native';

// import custom components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import logError from 'react-native/Libraries/Utilities/logError';

export default function HomeScreen(props) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const greeting = 'Welcome, ' + userObject.nickname;

  const eventHandler = async nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('Healthy App has come to the foreground!');
      try {
      } catch (e) {
        logError('error: ', e.stack);
      }
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log(`AppState, ${appStateVisible}`);
  };
  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };
  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      console.log('User signed out with info:', fire_auth.currentUser);
    });
  };
  // app open event handler
  useEffect(() => {
    const subscription = AppState.addEventListener('change', eventHandler);
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);
  useEffect(() => {
    (async () => {
      getUserNickname();
      isDataLoaded();
    })();
  }, [dataLoaded]);

  console.log('Home screen nickname:', userObject.nickname);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={greeting} />
        <Text style={styles.accountInfo}>
          Current email: {fire_auth.currentUser.email}
        </Text>
        <BasicButton buttonText={'Log out'} onPressButton={onLogoutPress} />
      </KeyboardAwareScrollView>
    </View>
  );
}
