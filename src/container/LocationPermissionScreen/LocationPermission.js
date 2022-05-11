import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './LocationPermissionStyles';
import images from '../../../assets/images';

import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {fire_auth} from '../../database/FirebaseDefault';
import {askLocation} from '../../_utilities/PermissionUtilties';
import StepperFooter from '../../components/StepperFooter/StepperFooter';

export default function LocationPermissionScreen({navigation}) {
  const permissionPress = () => {
    askLocation();
  };

  const onNextButton = () => {
    console.log('Navigate to settings request fired');
    // saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, {
    //   id: fire_auth.currentUser.uid,
    //   completed: true,
    // });
    navigation.navigate('SettingsRequest');
  };

  const onPrevButton = () => {
    navigation.navigate('SetBedtimeGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName="Please enable Location Services so BetterHealth can track progress on your phone." />
        <BasicButton
          buttonText="Enable Location Services"
          onPressButton={permissionPress}
        />
        <Image
          source={images.locationPermission}
          style={styles.locationImage}
        />
      </KeyboardAwareScrollView>
      <StepperFooter
        position={4}
        onNextPress={onNextButton}
        onPrevPress={onPrevButton}
      />
    </View>
  );
}
