import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
// import Icon from 'react-native-vector-icons/FontAwesome';

const weeklyAverageSteps = 0;
const stepsGoal = 5000;
const dailySteps = 0;

export default function StepsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView >
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <Text style={styles.goalAmount}>
          Goal: {stepsGoal} steps/day
        </Text>
        <Text style={styles.dailySteps}>
          Daily Steps: {dailySteps}
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
}
