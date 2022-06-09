import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {minutesToHours} from '../../_utilities/UtilityFunctions';
import {
  getGoalsFromFirestore,
  fbaseScoresListener,
  fbaseGoalsListener,
} from '../../database/FirebaseGet';
import {
  stepsGoalObject,
  emptyGoalList,
} from '../../_constants/EmptyObjectConstants';
import {log, logError} from '../../_utilities/UtilityFunctions';

export default function GoalsScreenMain({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const [displayGoals, setDisplayGoals] = useState(emptyGoalList);

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

  // refresh goals data
  const refreshGoalsData = async () => {
    const goals = await getGoalsFromFirestore();
    log('refreshGoalsData firing with new goals:', goals);
    await setDisplayGoals(goals);
  };

  useEffect(() => {
    (async () => await fbaseGoalsListener(refreshGoalsData))();
    (async () => await fbaseScoresListener(refreshGoalsData))();
  }, []);

  useEffect(() => {
    (async () => {
      await refreshGoalsData();
      isDataLoaded();
      log('In useEffect, dataLoaded is:', dataLoaded);
    })();
  }, [dataLoaded]);

  useFocusEffect(
    useCallback(() => {
      const refreshGoalsData = async () => {
        const goals = await getGoalsFromFirestore();
        log('in useEffect, refreshGoalsData firing with new goals:', goals);
        await setDisplayGoals(goals);
        setDataLoaded(false);
      };
      refreshGoalsData();
    }, []),
  );

  log('In Goals Screen, display goals are: ', displayGoals);
  log('In Goals Screen, stepsGoalObject is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Dashboard'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Step Goals'}
          goalAmount={displayGoals[0].goals.dailyStepGoal}
          goalUnit={'steps/day'}
          goalProgress={
            displayGoals[0].scores.average_steps /
            displayGoals[0].goals.dailyStepGoal
          }
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
