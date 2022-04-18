import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {minutesToHours} from '../../_utilities/UtilityFunctions';
import {
  getStepsGoal,
  getStepsScores,
  getSleepGoal,
  getSleepScores,
  stepGoalListener,
  bedtimeGoalListener,
  sleepDurationGoalListener,
} from '../../database/FirebaseGet';
import {
  stepsGoalObject,
  sleepGoalObject,
} from '../../_constants/EmptyObjectConstants';

export default function GoalsScreenMain({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dailyStepGoal, setDailyStepGoal] = useState(
    stepsGoalObject.goals.dailyStepGoal,
  );
  const [bedtimeGoal, setBedtimeGoal] = useState(
    sleepGoalObject.goals.sleep_bedtime,
  );
  const [sleepDurationGoal, setSleepDurationGoal] = useState(
    sleepGoalObject.goals.sleep_duration,
  );

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };

  const refreshStepGoal = newGoal => {
    console.log('In refreshStepGoal with newGoal:', newGoal);
    setDailyStepGoal(newGoal);
  };

  const refreshBedtime = newGoal => {
    console.log('In refreshBedtime with newGoal:', newGoal);
    setBedtimeGoal(newGoal);
  };

  const refreshSleepDurationGoal = newGoal => {
    console.log('In refreshSleepDurationGoal with newGoal:', newGoal);
    setSleepDurationGoal(newGoal);
  };

  useEffect(() => {
    (async () => {
      await getStepsGoal();
      await getStepsScores();
      await getSleepGoal();
      await getSleepScores();
      isDataLoaded();
      console.log('In useEffect, dataLoaded is:', dataLoaded);
    })();
  }, [dataLoaded]);

  useEffect(() => {
    const stepUnsubscribe = stepGoalListener(refreshStepGoal);
    const bedtimeUnsubscribe = bedtimeGoalListener(refreshBedtime);
    const sleepDurationUnsubscribe = sleepDurationGoalListener(
      refreshSleepDurationGoal
    );
    return () => {
      stepUnsubscribe();
      bedtimeUnsubscribe();
      sleepDurationUnsubscribe();
    };
  }, []);

  console.log('In Goals Screen, stepsGoalObject is: ', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Dashboard'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Step Goals'}
          goalAmount={dailyStepGoal}
          goalUnit={'steps/day'}
          goalProgress={stepsGoalObject.scores.score / 100}
          onPress={() => navigateToPage('Steps')}
        />
        <GoalCard
          image={images.sleepTime}
          goalTitle={'Sleep Goals'}
          goalAmount={minutesToHours(sleepDurationGoal)}
          goalUnit={'hours/day'}
          goalProgress={sleepGoalObject.scores.score / 100}
          bedtime={bedtimeGoal}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
