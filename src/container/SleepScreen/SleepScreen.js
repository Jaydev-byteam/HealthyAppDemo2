import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './SleepScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import WeeklyTable from '../../components/WeeklyTable/WeeklyTable';
import EditSleepGoal from '../../components/EditSleepGoal/EditSleepGoal';

const weeklyAveSleep = 450;
// define a hardcoded bedtime as a Date object with current date, set time to 10:30 PM
let bedtime = new Date();
bedtime.setHours(22, 30);
// define hardcoded data for the sleep minutes
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
  // minutes string needs to be in a 2-digit format
  if (min < 10) {
    minText = '0' + min.toString();
  } else {
    minText = min.toString();
  }
  // return concatenation of hours and min portions separated by a colon
  return hours + ':' + minText;
};

// helper function to convert bedtime date object to HH:MM AM/PM string
const bedtimeString = bedtimeDate => {
  // define hours and minutes
  let hours = bedtimeDate.getHours();
  let minutes = bedtimeDate.getMinutes();
  let minText = '';
  let ampm = 'PM';
  if (hours < 12) {
    ampm = 'AM';
  } else {
    hours -= 12;
  }
  // minutes string needs to be in a 2-digit format
  if (minutes < 10) {
    minText = '0' + minutes.toString();
  } else {
    minText = minutes.toString();
  }
  return hours.toString() + ':' + minText + ' ' + ampm;
};

export default function SleepScreen({navigation}) {
  // define state variable for the sleep amount objective
  const [sleep, setSleep] = useState(sleepGoal);
  // define state variable for the bedtime
  const [bed, setBed] = useState(bedtime);
  // convert bedtime into a clocktime string

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep More'} showIcon={false} />
        <Text style={styles.goalAmount}>Bedtime: {bedtimeString(bed)}</Text>
        <Text style={styles.goalAmount}>
          Goal: {minutesToHours(sleep)} hours/night
        </Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={weeklyAveSleep / sleep}
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
        <EditSleepGoal
          currentGoal={sleep}
          currentBedtime={bed}
          bedtimeString={bedtimeString}
          updateBedtime={setBed}
          updateSleep={setSleep}
          minutesToHours={minutesToHours}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
