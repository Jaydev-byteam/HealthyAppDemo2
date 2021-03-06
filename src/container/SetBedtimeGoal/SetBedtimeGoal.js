import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import styles from './SetBedtimeGoalStyles';
import images from '../../../assets/images';
import {fire_auth} from '../../database/FirebaseDefault';
import {changeBedtimeGoal} from '../../database/FirebaseWrite';
import {log, logError} from '../../_utilities/UtilityFunctions';
import {minusIcon, plusIcon} from '../../_constants/IconConstants';
import {
  minutesToHours,
  timeStringToDate,
  bedtimeString,
} from '../../_utilities/UtilityFunctions';
import StepperFooter from '../../components/StepperFooter/StepperFooter';

export default function SetBedtimeGoal({navigation}) {
  // test logging variables
  const dummyVar = 'Chet Breakfast'
  // create a date at 10 PM for initialization purposes
  const defaultDate = timeStringToDate('10:00 PM');
  // initialize state variable for the goal bedtime
  const [bedtime, setBedtime] = useState('10:00 PM');
  // initialize state variable for the bedtime date object
  const [bedtimeDate, setBedtimeDate] = useState(defaultDate);
  // state variable to show bedtime picker
  const [showPicker, setShowPicker] = useState(false);

  const bedtimePress = () => {
    if (showPicker) {
      log('Bedtime selected:', bedtime);
    }
    setShowPicker(!showPicker);
  };

  const onNextButton = async () => {
    log('Navigate to main fired');
    await changeBedtimeGoal(bedtime);
    navigation.navigate('LocationPermission');
  };

  const onPrevButton = () => {
    navigation.navigate('SetSleepGoal');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Set Up Your Sleep Goal'} showIcon={false} />
        <View style={styles.mainCard}>
          <Image style={styles.cardLogo} source={images.sleepIcon} />
          <Text style={styles.goalQuery}>
            What time do you want to go to bed during the week?
          </Text>
          <View style={styles.sleepEdit}>
            <View>
              <Text style={styles.editText}>Edit Bedtime</Text>
              <Text style={styles.sleepGoal}>{bedtime}</Text>
            </View>
            <TouchableOpacity
              style={styles.bedtimeButton}
              onPress={bedtimePress}>
              <Text style={styles.buttonTitle}>
                {!showPicker ? 'CHOOSE BEDTIME' : 'CLOSE PICKER'}
              </Text>
            </TouchableOpacity>
          </View>
          {showPicker && (
            <View style={styles.timePicker}>
              <RNDateTimePicker
                themeVariant="light"
                value={bedtimeDate}
                mode="time"
                display="spinner"
                minuteInterval={15}
                onChange={(event, value) => {
                  setBedtime(bedtimeString(value));
                  setBedtimeDate(value);
                }}
                style={styles.datePicker}
              />
            </View>
          )}
          <View style={styles.sleepGoalGraphic}>
            <Image source={images.sleepGraphic} style={styles.sleepImage} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StepperFooter
        position={3}
        onNextPress={onNextButton}
        onPrevPress={onPrevButton}
      />
    </View>
  );
}
