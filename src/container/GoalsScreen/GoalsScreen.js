import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {
  getStepsGoal,
  getStepsScores,
  getSleepGoal,
} from '../../database/FirebaseGet';
import {
  sleepGoalObject,
  stepsGoalObject,
} from '../../_constants/EmptyObjectConstants';
import {minutesToHours} from "../../_utilities/UtilityFunctions";

export default function GoalsScreenMain({navigation}) {
  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  useEffect(() => {
    getStepsGoal(stepsGoalObject);
    getStepsScores(stepsGoalObject);
    getSleepGoal(sleepGoalObject);
  }, []);
  console.log('In GoalsScreen, stepsGoalObject is: ', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Page'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Steps'}
          goalAmount={stepsGoalObject.goals.dailyStepGoal}
          goalUnit={'steps/day'}
          goalProgress={stepsGoalObject.scores.score / 100}
          onPress={() => navigateToPage('Steps')}
        />
        <GoalCard
          image={images.sleepTime}
          goalTitle={'Sleep Time'}
          goalAmount={minutesToHours(sleepGoalObject.goals.sleep_duration)}
          goalUnit={'hours/day'}
          goalProgress={0.8}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
