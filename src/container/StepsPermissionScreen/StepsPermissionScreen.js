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
import StepperFooter from '../../components/StepperFooter/StepperFooter';

export default function StepsPermissionScreen({navigation}) {
  const permissionPress = () => {
    MDHealthKitManager.requestAuthorization();
  };

  const onNextButton = () => {
    console.log('Navigate to setSleepGoal fired');
    navigation.navigate('SetSleepGoal');
  };

  const onPrevButton = () => {
    navigation.navigate('SetStepsGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.permissions}>
          Please enable Apple HealthKit Permissions so BetterHealth can track your steps progress on your phone.
        </Text>
        <BasicButton
          buttonText="Enable HealthKit Permissions"
          onPressButton={permissionPress}
        />
      </KeyboardAwareScrollView>
      <StepperFooter
        position={1}
        onNextPress={onNextButton}
        onPrevPress={onPrevButton}
      />
    </View>
  );
}
