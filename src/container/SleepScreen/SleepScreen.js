import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './SleepScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import WeeklyTable from '../../components/WeeklyTable/WeeklyTable';
import EditSleepGoal from "../../components/EditSleepGoal/EditSleepGoal";

const weeklyAveSleep = 450;
const bedtime = '11:00 PM';
const sleepGoal = 480;
const dailySleep = 450;
const successWeek = [false, true, false, true, false, true, false];

// helper function to convert minutes to H:MM format
const minutesToHours = minutes => {
  // define two text variables to be concatenated into a time string
  let hours,
    minText = '';
  // calculate hours portion and convert to string
  hours = Math.floor(minutes / 60).toString();
  // calculate minutes portion
  let min = minutes % 60;
  // minutes needs to be in a 2-digit format
  if (min < 10) {
    minText = '0' + min.toString();
  } else {
    minText = min.toString();
  }
  // return concatenation of hours and min portions separated by a colon
  return hours + ':' + minText;
};

export default function SleepScreen({navigation}) {
  // define state variable for the sleep amount objective
  const [sleep, setSleep] = useState(sleepGoal);
  // define state variable for the bedtime
  const [bed, setBed] = useState(bedtime);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep More'} showIcon={false} />
        <Text style={styles.goalAmount}>Bedtime: {bed}</Text>
        <Text style={styles.goalAmount}>Goal: {minutesToHours(sleepGoal)} hours/night</Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={weeklyAveSleep / sleepGoal}
            progressColor={'aqua'}
            backgroundColor={'none'}
            strokeWidth={12}
          />
          <Image style={styles.logo} source={images.sleepTime} />
        </View>
        <Text style={styles.dailySleep}>
          {minutesToHours(weeklyAveSleep)} hours/night
        </Text>
        <Text style={styles.goalAmount}>(Average of last 7 days)</Text>
        <WeeklyTable weeklyResult={successWeek} />
        <EditSleepGoal currentBedtime={bedtime} />
      </KeyboardAwareScrollView>
    </View>
  );
}
