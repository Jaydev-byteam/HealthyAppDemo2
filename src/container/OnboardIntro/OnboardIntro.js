import * as React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';

import styles from './OnboardIntroStyles';
import OnboardingCard from '../../components/OnboardingCard/OnboardingCard';
import BasicButton from "../../components/BasicButton/BasicButton";

export default function OnboardIntro({navigation}) {
  const onNextPress = () => {
    navigation.navigate('SetStepsGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>
          Proven Results for Goals Including:
        </Text>
        <OnboardingCard goalType={'steps'} />
        <OnboardingCard goalType={'sleep'} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={onNextPress}
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
          accessibilityLabel="Next"
          accessibilityHint="Navigate to the next page"
          accessibilityRole="button">
          <Text style={styles.smallText} allowFontScaling={false}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      </KeyboardAwareScrollView>
    </View>
  );
}
