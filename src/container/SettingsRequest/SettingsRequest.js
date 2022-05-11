import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './SettingsRequestStyles';

import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {MDHealthKitManager} from '../../_utilities/HealthKit';
import {fire_auth} from '../../database/FirebaseDefault';

export default function SettingsRequest({navigation}) {
  const onSettingsPress = () => {
    MDHealthKitManager.openApplicationSettings();
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
        <PageTitle pageName="One Last Thing!" />
        <Text style={styles.request}>
          BetterHealth needs location access at all times to track your phone
          use during your sleep interval.
        </Text>
        <BasicButton
          buttonText="Open Your Settings"
          onPressButton={onSettingsPress}
        />
        <BasicButton buttonText="Next" onPressButton={onNextButton} />
      </KeyboardAwareScrollView>
    </View>
  );
}
