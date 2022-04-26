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
  bedtime,
  onPress,
}) {
  const textOne =
    goalTitle === 'Step Goals'
      ? styleConstants.dark_text
      : styleConstants.light_text;
  const subheadText =
    goalTitle === 'Step Goals' ? '10-Day Avg' : 'Sleep Quality';
  const subheadTextTwo =
    goalTitle === 'Step Goals' ? 'daily steps goal' : 'sleep duration goal';
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.card,
          goalTitle === 'Step Goals' ? styles.stepCard : styles.sleepCard,
        ]}>
        <Text
          style={[
            styles.cardTitle,
            goalTitle === 'Step Goals'
              ? styles.stepTextColor
              : styles.sleepTextColor,
          ]}>
          {goalTitle}
        </Text>
        <View style={styles.cardBody}>
          <View style={styles.cardSegment}>
            <ProgressCircle
              style={styles.progress}
              progress={goalProgress}
              progressColor={
                goalTitle === 'Step Goals'
                  ? styleConstants.progress_color
                  : styleConstants.progress_color_alt
              }
              backgroundColor={
                goalTitle === 'Step Goals'
                  ? styleConstants.progress_bg
                  : styleConstants.progress_bg_alt
              }
              strokeWidth={10}
            />
            <View style={styles.cardInfo}>
              <Text
                style={[
                  styles.goalAmount,
                  goalTitle === 'Step Goals'
                    ? styles.stepTextColor
                    : styles.sleepTextColor,
                ]}>
                {goalTitle === 'Step Goals'
                  ? Math.round(goalAmount * goalProgress).toLocaleString('en-US')
                  : goalProgress * 100 + '%'}
              </Text>
              <Text
                style={[
                  styles.goalSubhead,
                  goalTitle === 'Step Goals'
                    ? styles.stepSubhead
                    : styles.sleepSubhead,
                ]}>
                {subheadText}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.cardDivider,
              goalTitle === 'Step Goals'
                ? styles.stepDivider
                : styles.sleepDivider,
            ]}
          />
          <View style={[styles.cardSegment, styles.cardSegmentRight]}>
            <Text
              style={[
                styles.goalAmount,
                goalTitle === 'Step Goals'
                  ? styles.stepTextColor
                  : styles.sleepTextColor,
              ]}>
              {goalTitle === 'Step Goals'
                ? goalAmount.toLocaleString('en-US')
                : goalAmount}
            </Text>
            <Text
              style={[
                styles.goalSubhead,
                goalTitle === 'Step Goals'
                  ? styles.stepSubhead
                  : styles.sleepSubhead,
              ]}>
              {subheadTextTwo}
            </Text>
            {goalTitle === 'Sleep Goals' && (
              <>
                <Text style={[styles.goalAmount, styles.sleepTextColor]}>
                  {bedtime}
                </Text>
                <Text style={[styles.goalSubhead, styles.sleepSubhead]}>
                  Bedtime
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
