import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';

import styles from './OnboardIntroStyles';
import OnboardingCard from '../../components/OnboardingCard/OnboardingCard';
import BasicButton from "../../components/BasicButton/BasicButton";

export default function OnboardIntro({navigation}) {
  const onNextButton = () => {
    navigation.navigate('SetStepsGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle
          pageName={'Proven Results for Goals Including:'}
          showIcon={false}
        />
        <OnboardingCard goalType={'steps'} />

      </KeyboardAwareScrollView>
      <BasicButton buttonText="Next" onPressButton={onNextButton} />
    </View>
  );
}
