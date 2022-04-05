import React from 'react';
import {Text, Image, View, TouchableWithoutFeedback} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import styles from './GoalCardStyles';
import {styleConstants} from '../../_constants/StyleConstants';
import images from '../../../assets/images/';

// create a component for the Goal Card to be shown on the Goals Screen
export default function GoalCard({
  image,
  goalTitle,
  goalAmount,
  goalUnit,
  goalProgress,
  onPress,
}) {
  const bgColor =
    goalTitle === 'Step Goals'
      ? styleConstants.card_primary
      : styleConstants.card_sleep;
  const textOne =
    goalTitle === 'Step Goals'
      ? styleConstants.dark_text
      : styleConstants.light_text;
  const textTwo =
    goalTitle === 'Step Goals'
      ? styleConstants.subhead_text
      : styleConstants.sleep_subhead;
  return (
    <View style={styles.card} backgroundColor={bgColor}>
      <View style={styles.cardTitle}>
        <Text
          color={textOne}
        >{goalTitle}</Text>
      </View>
      <ProgressCircle
        style={styles.progress}
        progress={goalProgress}
        progressColor={styleConstants.progress_color}
        backgroundColor={'none'}
        strokeWidth={10}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <Image style={styles.logo} source={image} />
      </TouchableWithoutFeedback>
      <View style={styles.cardInfo}>
        <Text style={styles.goalTitle}>{goalTitle}</Text>
        <Text style={styles.goalAmount}>
          {goalAmount} {goalUnit}
        </Text>
      </View>
    </View>
  );
}
