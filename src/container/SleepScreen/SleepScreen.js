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
import { styleConstants } from "../../_constants/StyleConstants";
import {minutesToHours, bedtimeString} from "../../_utilities/UtilityFunctions";

const weeklyAveSleep = 450;
// define a hardcoded bedtime as a Date object with current date, set time to 10:30 PM
let bedtime = new Date();
bedtime.setHours(22, 30);
// define hardcoded data for the sleep minutes
const sleepGoal = 480;
const dailySleep = 450;
const successWeek = [false, true, false, true, false, true, false];


export default function SleepScreen({navigation, user}) {
  console.log('In Sleep Screen with navigation:', navigation);
  console.log('In Sleep Screen with user', user);
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
            progressColor={styleConstants.progress_color}
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
