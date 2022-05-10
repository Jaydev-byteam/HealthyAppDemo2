import * as React from 'react';
import {useEffect} from "react";
import { View, Text, Image} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './StepsPermissionScreenStyles';

import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';

export default function StepsPermissionScreen({navigation}) {


  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Please enable Apple HealthKit Permissions so BetterHealth can track your steps progress on your phone.'} showIcon={} />
      </KeyboardAwareScrollView>
    </View>
  )


}
