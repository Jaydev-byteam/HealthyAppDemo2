import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import EditGoal from '../../components/EditGoal/EditGoal';
import {styleConstants} from '../../_constants/StyleConstants';
import {stepsGoalObject} from '../../_constants/EmptyObjectConstants';
import {getStepsGoal, getStepsScores} from '../../database/FirebaseGet';
import {MDHealthKitManager} from '../../_utilities/HealthKit';
import {log} from '../../_utilities/UtilityFunctions';

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
  }, [dataLoaded, stepsGoal]);

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

  useEffect(() => {
    MDHealthKitManager.requestAuthorization();
  }, []);

  log('In StepsScreen, stepsGoalObject is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <View style={styles.titleCard}>
          <Image style={styles.cardLogo} source={images.stepsIcon} />
          <View style={styles.goalHeadline}>
            <Text style={styles.goalAmount}>{stepsGoal.toLocaleString()}</Text>
            <Text style={styles.goalSubhead}>daily steps goal</Text>
          </View>

          <Image style={styles.cardLogo} source={images.stepsIcon} />
        </View>
        <View style={styles.centerSection}>
          <View style={styles.leftCard}>
            <Text style={styles.leftCardTitle}>Daily Step Total</Text>
            <ProgressCircle
              style={styles.progress}
              progress={currentSteps / stepsGoal}
              progressColor={styleConstants.progress_color}
              backgroundColor={styleConstants.progress_bg}
              strokeWidth={10}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.progressText}>
                {currentSteps.toLocaleString('en-US')}
              </Text>
              <Text style={styles.goalSubhead}>Steps Today</Text>
            </View>
            <Text style={styles.goalSubhead}>
              {Math.round((currentSteps * 100) / stepsGoal) >= 100
                ? 100
                : Math.round((currentSteps * 100) / stepsGoal)}
              % complete
            </Text>
          </View>
          <View style={styles.rightCard}>
            <Text style={styles.rightCardTitle}>10-Day Average Step Count</Text>
            <View style={styles.rightInfo}>
              <Text style={styles.weeklyAverage}>
                {Math.round(
                  stepsGoalObject.scores.average_steps,
                ).toLocaleString()}
              </Text>
              <Text style={styles.rightCardSubhead}>steps</Text>
            </View>
            <Image style={styles.cardLogo} source={images.stepsIconReverse} />
          </View>
        </View>
        <EditGoal currentGoal={stepsGoal} updateSteps={setStepsGoal} />
      </KeyboardAwareScrollView>
    </View>
  );
}
