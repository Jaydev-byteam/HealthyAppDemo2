import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './LocationPermissionStyles';
import images from '../../../assets/images';
import {log, logError} from "../../_utilities/UtilityFunctions";

import {askLocation} from '../../_utilities/PermissionUtilities';
import StepperFooter from '../../components/StepperFooter/StepperFooter';

export default function LocationPermissionScreen({navigation}) {
  const permissionPress = () => {
    askLocation();
  };

  const onNextButton = () => {
    log('Navigate to settings request fired');
    navigation.navigate('SettingsRequest');
  };

  const onPrevButton = () => {
    navigation.navigate('SetBedtimeGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.permissions}>
          Please enable Location Services so BetterHealth can track progress on your phone.
        </Text>
        <Image
          source={images.locationPermission}
          style={styles.locationImage}
        />
        <BasicButton
          buttonText="Enable Location Services"
          onPressButton={permissionPress}
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
