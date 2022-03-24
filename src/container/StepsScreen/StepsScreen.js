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
import { styleConstants } from "../../_constants/StyleConstants";
import { stepsGoalObject } from "../../_constants/EmptyObjectConstants";
import { getStepsGoal} from "../../database/FirebaseGet";


const weeklyAverageSteps = 3456;
// const stepsGoal = 5000;
const dailySteps = 3456;
const successWeek = [true, false, true, false, true, false, true];



export default function StepsScreen() {

  const [steps, setSteps] = useState(stepsGoal);

  useEffect(() => {
    getStepsGoal(stepsGoalObject);
  }, [])

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Hit Daily Steps'} showIcon={false} />
        <Text style={styles.goalAmount}>
          Goal: {stepsGoalObject.goals.dailyStepGoal.toLocaleString()} steps/day
        </Text>
        <Text style={styles.dailySteps}>
          Daily Steps: {dailySteps.toLocaleString()}
        </Text>
        <View style={styles.card}>
          <ProgressCircle
            style={styles.progress}
            progress={weeklyAverageSteps / steps}
            progressColor={styleConstants.progress_color}
            backgroundColor={'none'}
            strokeWidth={12}
          />
          <Image style={styles.logo} source={images.stepsIcon} />
        </View>
        <Text style={styles.dailySteps}>
          {weeklyAverageSteps.toLocaleString()} steps/day
        </Text>
        <Text style={styles.goalAmount}>(Average of last 7 days)</Text>
        <WeeklyTable weeklyResult={successWeek} />
        <EditGoal currentGoal={steps} updateSteps={setSteps} />
      </KeyboardAwareScrollView>
    </View>
  );
}
