import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from "@react-navigation/native";
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
  goalListener,
  getGoalsFromFirestore,
  fbaseScoresListener,
  fbaseGoalsListener,
} from '../../database/FirebaseGet';
import {
  stepsGoalObject,
  sleepGoalObject,
  goalList,
} from '../../_constants/EmptyObjectConstants';

export default function GoalsScreenMain({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);
  // const [dailyStepGoal, setDailyStepGoal] = useState(
  //   stepsGoalObject.goals.dailyStepGoal,
  // );
  // const [bedtimeGoal, setBedtimeGoal] = useState(
  //   sleepGoalObject.goals.sleep_bedtime,
  // );
  // const [sleepDurationGoal, setSleepDurationGoal] = useState(
  //   sleepGoalObject.goals.sleep_duration,
  // );
  //
  // const [goalObject, setGoalObject] = useState({
  //   steps: {
  //     dailyStepGoal: stepsGoalObject.goals.dailyStepGoal,
  //   },
  //   sleep: {
  //     sleep_duration: sleepGoalObject.goals.sleep_duration,
  //     sleep_bedtime: sleepGoalObject.goals.sleep_bedtime,
  //   },
  // });

  const [displayGoals, setDisplayGoals] = useState(goalList);


  // const refreshGoals = newGoalObject => {
  //   console.log('In refresh goals with newGoalObject:', newGoalObject);
  //   setGoalObject(newGoalObject);
  // };

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  };

  const isFocused = () => {
    if (dataLoaded) {
      setDataLoaded(false);
    }
  };

  // const refreshStepGoal = newGoal => {
  //   console.log('In refreshStepGoal with newGoal:', newGoal);
  //   setDailyStepGoal(newGoal);
  // };
  //
  // const refreshBedtime = newGoal => {
  //   console.log('In refreshBedtime with newGoal:', newGoal);
  //   setBedtimeGoal(newGoal);
  // };
  //
  // const refreshSleepDurationGoal = newGoal => {
  //   console.log('In refreshSleepDurationGoal with newGoal:', newGoal);
  //   setSleepDurationGoal(newGoal);
  // };

  // refresh goals data
  const refreshGoalsData = async () => {
    const goals = await getGoalsFromFirestore();
    console.log('refreshGoalsData firing with new goals:', goals);
    await setDisplayGoals(goals);
  };

  useEffect(() => {
    (async () => await fbaseGoalsListener(refreshGoalsData))();
    (async () => await fbaseScoresListener(refreshGoalsData))();
  }, []);

  useEffect(() => {
    (async () => {
      // await getStepsGoal();
      // await getStepsScores();
      // await getSleepGoal();
      // await getSleepScores();
      await refreshGoalsData();
      isDataLoaded();
      console.log('In useEffect, dataLoaded is:', dataLoaded);
    })();
  }, [dataLoaded]);

  useFocusEffect(
    useCallback(() =>

      const refreshGoalsData = async () => {
        const goals = await getGoalsFromFirestore();
        console.log('in useEffect, refreshGoalsData firing with new goals:', goals);
        await setDisplayGoals(goals);
        setDataLoaded(false);
      };
      refreshGoalsData();
    }, []),
  );

  // useEffect(() => {
  //   const stepUnsubscribe = stepGoalListener(refreshStepGoal);
  //   const bedtimeUnsubscribe = bedtimeGoalListener(refreshBedtime);
  //   const sleepDurationUnsubscribe = sleepDurationGoalListener(
  //     refreshSleepDurationGoal
  //   );
  //   // const subscriber = goalListener(refreshGoals);
  //   return () => {
  //     stepUnsubscribe();
  //     bedtimeUnsubscribe();
  //     sleepDurationUnsubscribe();
  //     // subscriber();
  //   };
  // }, []);

  // useEffect(() => {
  //   const subscriber = goalListener(refreshGoals);
  //   return () => {
  //     subscriber();
  //   };
  // });

  console.log('In Goals Screen, display goals are: ', displayGoals);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Dashboard'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Step Goals'}
          goalAmount={displayGoals[0].goals.dailyStepGoal}
          goalUnit={'steps/day'}
          goalProgress={displayGoals[0].scores.score / 100}
          onPress={() => navigateToPage('Steps')}
        />
        <GoalCard
          image={images.sleepTime}
          goalTitle={'Sleep Goals'}
          goalAmount={minutesToHours(displayGoals[1].goals.sleep_duration)}
          goalUnit={'hours/day'}
          goalProgress={displayGoals[1].scores.score / 100}
          bedtime={displayGoals[1].goals.sleep_bedtime}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
