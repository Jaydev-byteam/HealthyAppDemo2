import React, {useEffect, useState, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import styles from './HomeScreenStyles';
import {getUserNickname} from '../../database/FirebaseGet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  userObject,
  stepsGoalObject,
} from '../../_constants/EmptyObjectConstants';
import {AppState} from 'react-native';
import {
  getHKCurrDaySteps,
  getHKTenDayTotSteps,
} from '../../_utilities/HealthKitSteps';
import {log} from '../../_utilities/UtilityFunctions';

// import custom components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import logError from 'react-native/Libraries/Utilities/logError';
import DeleteAccountButton from '../../components/DeleteAccountButton/DeleteAccountButton';

// import Firebase write function
import {appOpenDoc} from '../../database/FirebaseWrite';

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
      log('Healthy App has come to the foreground!');
      try {
        getHKCurrDaySteps();
        getHKTenDayTotSteps();
        await appOpenDoc();
      } catch (e) {
        logError('error: ', e.stack);
      }
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    log(`AppState, ${appStateVisible}`);
  };
  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };
  const onLogoutPress = () => {
    fire_auth.signOut().then(() => {
      log('User signed out with info:', fire_auth.currentUser);
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
      await getUserNickname();
      isDataLoaded();
    })();
  }, [dataLoaded]);

  log('Home screen nickname:', userObject.nickname);
  log('Steps goal object is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={greeting} showIcon={false} />
        <Text style={styles.accountInfo}>
          Current email:{' '}
          {fire_auth.currentUser ? fire_auth.currentUser.email : ''}
        </Text>
        <BasicButton buttonText={'Log out'} onPressButton={onLogoutPress} />
        <DeleteAccountButton />
      </KeyboardAwareScrollView>
    </View>
  );
}
