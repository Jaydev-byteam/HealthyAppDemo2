import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './SleepScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import EditSleepGoal from '../../components/EditSleepGoal/EditSleepGoal';
import {styleConstants} from '../../_constants/StyleConstants';
import {
  getSleepGoal,
  getSleepScores,
  getStepsScores,
} from '../../database/FirebaseGet';
import {
  minutesToHours,
  bedtimeString,
  timeStringToDate,
} from '../../_utilities/UtilityFunctions';
import {
  sleepGoalObject,
  stepsGoalObject,
} from '../../_constants/EmptyObjectConstants';
import {askLocation} from "../../_utilities/PermissionUtilties";

export default function SleepScreen({navigation, user}) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };
  // define state variable for the sleep amount objective
  const [sleepDuration, setSleepDuration] = useState(
    sleepGoalObject.goals.sleep_duration,
  );
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

  useEffect(() => {
    askLocation();
  }, []);

  console.log('In SleepScreen, goals object is:', sleepGoalObject);
  console.log('In SleepScreen goal score is:', sleepGoalObject.scores.score);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep More'} showIcon={false} />
        <View style={styles.titleCard}>
          <View style={styles.goalHeadline}>
            <Text style={styles.goalSubhead}>Bedtime</Text>
            <Text style={styles.goalAmount}>{bedtime}</Text>
          </View>
          <View style={styles.cardDivider} />
          <View style={styles.goalHeadline}>
            <Text style={styles.goalSubhead}>Time To Sleep</Text>
            <Text style={styles.goalAmount}>
              {minutesToHours(sleepDuration)}
            </Text>
          </View>
        </View>

        <View style={styles.centerSection}>
          <View style={styles.leftCard}>
            <Text style={styles.leftCardTitle}>Daily Sleep Progress</Text>
            <ProgressCircle
              style={styles.progress}
              progress={sleepGoalObject.scores.score / 100}
              progressColor={styleConstants.progress_color_alt}
              backgroundColor={styleConstants.progress_bg_alt}
              strokeWidth={10}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.goalSubhead}>Quality</Text>
              <Text style={styles.progressText}>
                {sleepGoalObject.scores.score}%
              </Text>
            </View>
          </View>
          <View style={styles.rightCard}>
            <Text style={styles.rightCardTitle}>10-day Average Sleep Time</Text>

            <Text style={styles.weeklyAverage}>
              {minutesToHours(sleepGoalObject.scores.average_sleep)}
            </Text>

            <Image style={styles.cardLogo} source={images.sleepTime} />
          </View>
        </View>

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
