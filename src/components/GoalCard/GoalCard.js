import React from 'react';
import {Text, Image, View, TouchableWithoutFeedback} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import styles from './GoalCardStyles';
import images from '../../../assets/images/';

// create a component for the Goal Card to be shown on the Goals Screen
export default function GoalCard(props) {
  return (
    <View style={styles.card}>
      {/*<View style={styles.graphic}>*/}
      <ProgressCircle
        style={styles.progress}
        progress={props.goalProgress}
        progressColor={'aqua'}
        backgroundColor={'none'}
        strokeWidth={10}
      />
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate(props.destination)}
      >
        <Image style={styles.logo} source={props.image} />
      </TouchableWithoutFeedback>
      {/*</View>*/}

      <View style={styles.cardInfo}>
        <Text style={styles.goalTitle}>{props.goalTitle}</Text>
        <Text style={styles.goalAmount}>
          {props.goalAmount} {props.goalUnit}
        </Text>
      </View>
    </View>
  );
}