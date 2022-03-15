import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';

const weeklyAverageSteps = 0;
const stepsGoal = 5000;
const dailySteps = 3456;

export default function StepsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <Text style={styles.goalAmount}>Goal: {stepsGoal} steps/day</Text>
        <Text style={styles.dailySteps}>Daily Steps: {dailySteps}</Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={dailySteps/stepsGoal}
            progressColor={'aqua'}
            backgroundColor={'none'}
            strokeWidth={12}
          />

          <Image style={styles.logo} source={images.stepsIcon} />
        </View>
        <Text style={styles.dailySteps}>{weeklyAverageSteps} steps/day</Text>
        <Text style={styles.goalAmount}>(Average of last 7 days)</Text>
      </KeyboardAwareScrollView>
    </View>
  );
}
