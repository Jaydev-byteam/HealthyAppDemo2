import * as React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './OnboardingCardStyles';
import images from '../../../assets/images';

export default function OnboardingCard({goalType}) {
  return (
    <View
      style={[
        styles.mainCard,
        goalType === 'steps' ? styles.stepColor : styles.sleepColor,
      ]}>
      <View style={styles.titleBar}>
        <Image
          style={styles.cardLogo}
          source={goalType === 'steps' ? images.stepsIcon : images.sleepIcon}
        />
        <Text
          style={goalType === 'steps' ? styles.stepTitle : styles.sleepTitle}>
          {goalType === 'steps'
            ? 'Hitting Your Step Goals'
            : 'Getting More Sleep'}
        </Text>
      </View>
      <View style={styles.goalGraphic}>
        <Image
          source={
            goalType === 'steps' ? images.stepsGraphic : images.sleepGraphic
          }
          style={styles.goalImage}
        />
      </View>
    </View>
  );
}
