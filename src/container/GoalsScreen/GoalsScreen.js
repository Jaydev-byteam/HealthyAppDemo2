import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {minutesToHours} from "../../_utilities/UtilityFunctions";
import {
  getStepsGoal,
  getStepsScores,
  getSleepGoal,
  getSleepScores,
} from '../../database/FirebaseGet';
import {
  stepsGoalObject,
  sleepGoalObject,
} from '../../_constants/EmptyObjectConstants';

export default function GoalsScreenMain({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  const isDataLoaded = () => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
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

  console.log('In Goals Screen, stepsGoalObject is: ', stepsGoalObject );
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Dashboard'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Step Goals'}
          goalAmount={stepsGoalObject.goals.dailyStepGoal}
          goalUnit={'steps/day'}
          goalProgress={stepsGoalObject.scores.score / 100}
          onPress={() => navigateToPage('Steps')}
        />
        <GoalCard
          image={images.sleepTime}
          goalTitle={'Sleep Goals'}
          goalAmount={minutesToHours(sleepGoalObject.goals.sleep_duration)}
          goalUnit={'hours/day'}
          goalProgress={sleepGoalObject.scores.score / 100}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
