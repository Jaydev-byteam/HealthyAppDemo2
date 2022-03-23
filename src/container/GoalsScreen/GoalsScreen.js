import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {getStepsGoal, getStepsScores} from '../../database/FirebaseGet';
import {EmptyStepsGoalObject} from '../../_constants/EmptyObjectConstants';

export default function GoalsScreenMain({navigation}) {
  // set state variables for the goals and data for steps and sleep
  const [stepsGoal, setStepsGoal] = useState(0);
  const [stepsScores, setStepsScores] = useState(EmptyStepsGoalObject);

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  useEffect(() => {
    getStepsGoal(setStepsGoal);
    getStepsScores(setStepsScores);
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Page'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Steps'}
          goalAmount={stepsGoal}
          goalUnit={'steps/day'}
          goalProgress={stepsScores.score / 100}
          onPress={() => navigateToPage('Steps')}
        />
        <GoalCard
          image={images.sleepTime}
          goalTitle={'Sleep Time'}
          goalAmount={'7.5'}
          goalUnit={'hours/day'}
          goalProgress={0.8}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
