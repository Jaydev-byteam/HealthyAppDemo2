import * as React from 'react';
import { useEffect, useState } from "react";
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './SleepScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import WeeklyTable from '../../components/WeeklyTable/WeeklyTable';
import EditSleepGoal from '../../components/EditSleepGoal/EditSleepGoal';
import { styleConstants } from "../../_constants/StyleConstants";
import { getSleepGoal, getSleepScores, getStepsScores } from "../../database/FirebaseGet";
import {minutesToHours, bedtimeString, timeStringToDate} from "../../_utilities/UtilityFunctions";
import { sleepGoalObject } from "../../_constants/EmptyObjectConstants";

export default function SleepScreen({navigation, user}) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };
  // define state variable for the sleep amount objective
  const [sleepDuration, setSleepDuration] = useState(sleepGoalObject.goals.sleep_duration);
  // define state variable for the bedtime
  const [bedtime, setBedtime] = useState(sleepGoalObject.goals.sleep_bedtime);
  // convert bedtime string into a date object that can be modified
  const bedtimeDate = timeStringToDate(bedtime);

  useEffect(() => {
    (async () => {
      await getSleepGoal();
      await getSleepScores();
      isDataLoaded();
    })();
  }, [dataLoaded]);

  console.log('In SleepScreen, goals object is:', sleepGoalObject);
  console.log('In SleepScreen goal score is:', sleepGoalObject.scores.score);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep More'} showIcon={false} />
        <Text style={styles.goalAmount}>Bedtime: {bedtime}</Text>
        <Text style={styles.goalAmount}>
          Goal: {minutesToHours(sleepDuration)} hours/night
        </Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={sleepGoalObject.scores.score / 100}
            progressColor={styleConstants.progress_color}
            backgroundColor={'none'}
            strokeWidth={12}
          />
          <Image style={styles.logo} source={images.sleepTime} />
        </View>
        <Text style={styles.dailySleep}>
          {minutesToHours(sleepGoalObject.scores.average_sleep)} hours/night
        </Text>
        <Text style={styles.goalAmount}>(Average of last 7 days)</Text>
        <WeeklyTable weeklyResult={sleepGoalObject.scores.days_of_the_week} />
        <EditSleepGoal
          currentGoal={sleepDuration}
          currentBedtime={bedtime}
          bedtimeString={bedtimeString}
          timeStringToDate={timeStringToDate}
          updateBedtime={setBedtime}
          updateSleep={setSleepDuration}
          minutesToHours={minutesToHours}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
