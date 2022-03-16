import * as React from 'react';
import { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './SleepScreenStyles';
import {ProgressCircle} from 'react-native-svg-charts';
import images from '../../../assets/images';
import WeeklyTable from '../../components/WeeklyTable/WeeklyTable';

const weeklyAveSleep = 450;
const sleepGoal = 480;
const dailySleep = 450;
const successWeek = [false, true, false, true, false, true, false];

export default function SleepScreen({navigation}) {
  const [sleep, setSleep] = useState(sleepGoal);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep More'} showIcon={false} />



      </KeyboardAwareScrollView>


    </View>
  )
}
