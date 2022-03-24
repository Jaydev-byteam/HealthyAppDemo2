import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {getStepsGoal, getStepsScores} from '../../database/FirebaseGet';
import {stepsGoalObject} from '../../_constants/EmptyObjectConstants';

export default function GoalsScreenMain({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
  };

  const isDataLoaded = () => {
    if(!dataLoaded) {
      setDataLoaded(true);
    }
  }

  useEffect(() => {
    (async () => {
      await getStepsGoal();
      await getStepsScores();
      isDataLoaded();
      console.log('In useEffect, dataLoaded is:', dataLoaded );
    })();

  }, [dataLoaded]);


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
          goalAmount={'7.5'}
          goalUnit={'hours/day'}
          goalProgress={0.8}
          onPress={() => navigateToPage('Sleep')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
