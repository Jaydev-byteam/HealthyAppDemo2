import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import {MDHealthKitManager} from '../../_utilities/HealthKit';

import styles from './StepsPermissionScreenStyles';

import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {fire_auth} from '../../database/FirebaseDefault';

export default function StepsPermissionScreen({navigation}) {
  const permissionPress = () => {
    MDHealthKitManager.requestAuthorization();
  };

  const onNextButton = () => {
    console.log('Navigate to main fired');
    saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, {
      id: fire_auth.currentUser.uid,
      completed: true,
    });
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName="Please enable Apple HealthKit Permissions so BetterHealth can track your steps progress on your phone." />
        <BasicButton
          buttonText="Enable HealthKit Permissions"
          onPressButton={permissionPress}
        />
        <BasicButton buttonText="Next" onPressButton={onNextButton} />
      </KeyboardAwareScrollView>
    </View>
  );
}
