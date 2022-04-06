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
import {MDHealthKitManager} from '../../_utilities/HealthKit';

export default function StepsScreen() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [stepsGoal, setStepsGoal] = useState(
    stepsGoalObject.goals.dailyStepGoal,
  );

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };

  const updateCurrentSteps = newSteps => {
    setCurrentSteps(newSteps);
  };

  useEffect(() => {
    (async () => {
      await getStepsGoal();
      await getStepsScores();
      isDataLoaded();
    })();
  }, [dataLoaded]);

  useEffect(() => {
    (async () => {
      await MDHealthKitManager.RNCurrentStepCount(async value => {
        if (value === null || value === undefined || isNaN(value)) {
          await updateCurrentSteps(0);
        }
        if (!isNaN(value)) {
          await updateCurrentSteps(value);
        } else {
          await updateCurrentSteps(0);
        }
      });
    })();
  }, []);

  console.log('In StepsScreen, stepsGoalObject is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <View style={styles.titleCard}>
          <Image style={styles.cardLogo} source={images.stepsIcon} />
          <View style={styles.goalHeadline}>
            <Text style={styles.goalAmount}>
              {stepsGoalObject.goals.dailyStepGoal.toLocaleString()}
            </Text>
            <Text style={styles.goalSubhead}>daily steps goal</Text>
          </View>

          <Image style={styles.cardLogo} source={images.stepsIcon} />
        </View>
        <View style={styles.centerSection}>
          <View style={styles.leftCard}>
            <Text style={styles.leftCardTitle}>
              Daily Step Total
            </Text>
            <ProgressCircle
              style={styles.progress}
              progress={currentSteps/stepsGoalObject.goals.dailyStepGoal}
              progressColor={styleConstants.progress_color}
              backgroundColor={styleConstants.progress_bg}
              strokeWidth={10}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.goalAmount}></Text>
            </View>
          </View>
          <View style={styles.rightCard}>
            <Text style={styles.rightCardTitle}>
              7 Day Average Step Count
            </Text>
          </View>
        </View>

        {/*<Text style={styles.dailySteps}>*/}
        {/*  Total Last 10 days:{' '}*/}
        {/*  {stepsGoalObject.scores.ten_day_steps.toLocaleString()}*/}
        {/*</Text>*/}
        {/*<View style={styles.card}>*/}
        {/*  <ProgressCircle*/}
        {/*    style={styles.progress}*/}
        {/*    progress={stepsGoalObject.scores.score / 100}*/}
        {/*    progressColor={styleConstants.progress_color}*/}
        {/*    backgroundColor={'none'}*/}
        {/*    strokeWidth={12}*/}
        {/*  />*/}
        {/*  <Image style={styles.logo} source={images.stepsIcon} />*/}
        {/*</View>*/}
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
