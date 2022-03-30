import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import WeeklyTable from '../../components/WeeklyTable/WeeklyTable';
import EditGoal from '../../components/EditGoal/EditGoal';
import {styleConstants} from '../../_constants/StyleConstants';
import {stepsGoalObject} from '../../_constants/EmptyObjectConstants';
import {getStepsGoal, getStepsScores} from '../../database/FirebaseGet';
import BasicButton from '../../components/BasicButton/BasicButton';
import {MDHealthKitManager} from '../../_utilities/HealthKit';
import {getHKCurrDaySteps, getHKTenDayTotSteps} from '../../_utilities/HealthKitSteps';

// const weeklyAverageSteps = 3456;
// const stepsGoal = 5000;
// const dailySteps = 3456;
// const successWeek = [true, false, true, false, true, false, true];

export default function StepsScreen() {
  const [dataLoaded, setDataLoaded] = useState(false);
  // const [currentSteps, setCurrentSteps] = useState(0);
  const [stepsGoal, setStepsGoal] = useState(
    stepsGoalObject.goals.dailyStepGoal,
  );

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };

  // const weeklyAverageSteps = stepsGoalObject.scores.average_steps;
  // const dailySteps = stepsGoalObject.scores.daily_steps;
  // const successWeek = stepsGoalObject.scores.days_of_the_week;

  useEffect(() => {
    (async () => {
      await getStepsGoal();
      await getStepsScores();
      isDataLoaded();
    })();
  }, [dataLoaded]);

  useEffect(() => {
    getHKCurrDaySteps();
    getHKTenDayTotSteps();
  }, []);


  console.log('In StepsScreen, stepsGoalObject is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <Text style={styles.goalAmount}>
          Goal: {stepsGoalObject.goals.dailyStepGoal.toLocaleString()} steps/day
        </Text>
        <Text style={styles.dailySteps}>
          Daily Steps: {stepsGoalObject.scores.daily_steps.toLocaleString()}
        </Text>
        <Text style={styles.dailySteps}>
          Total Last 10 days:{' '}
          {stepsGoalObject.scores.ten_day_steps.toLocaleString()}
        </Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={stepsGoalObject.scores.score / 100}
            progressColor={styleConstants.progress_color}
            backgroundColor={'none'}
            strokeWidth={12}
          />
          <Image style={styles.logo} source={images.stepsIcon} />
        </View>
        <Text style={styles.dailySteps}>
          {stepsGoalObject.scores.average_steps.toLocaleString()} steps/day
        </Text>
        <Text style={styles.goalAmount}>(Average of last 7 days)</Text>
        <WeeklyTable weeklyResult={stepsGoalObject.scores.days_of_the_week} />
        <EditGoal currentGoal={stepsGoal} updateSteps={setStepsGoal} />
      </KeyboardAwareScrollView>
    </View>
  );
}
