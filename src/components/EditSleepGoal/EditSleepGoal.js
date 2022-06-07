import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './EditSleepGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicButton from '../BasicButton/BasicButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {changeSleepGoal, changeStepGoal} from '../../database/FirebaseWrite';
import {log, logError} from '../../_utilities/UtilityFunctions';

export default function EditSleepGoal({
  currentGoal,
  currentBedtime,
  updateSleep,
  updateBedtime,
  bedtimeString,
  timeStringToDate,
  minutesToHours,
}) {
  // initialize state variables for new goal bedtime and sleep duration
  const [newGoal, setNewGoal] = useState(currentGoal);
  const [newBedtime, setNewBedtime] = useState(currentBedtime);
  // state variable to show bedtime picker
  const [showPicker, setShowPicker] = useState(false);

  log('In EditSleepGoal, newBed string is: ', newBedtime);
  log('In EditSleepGoal, newBed object is: ', timeStringToDate(newBedtime));
  log('In EditSleepGoal, showPicker is:', showPicker);

  const addToGoal = () => {
    if (newGoal + 15 <= 720) {
      setNewGoal(newGoal + 15);
    } else {
      alert('Maximum daily sleep goal is 12 hours');
    }
  };
  const subtractFromGoal = () => {
    if (newGoal - 15 >= 240) {
      setNewGoal(newGoal - 15);
    } else {
      alert('Minimum daily sleep goal is 4 hours.');
    }
  };

  const bedtimePress = () => {
    if (showPicker) {
      log('In bedtime press, newBed is: ', newBedtime);
      setNewBedtime(newBedtime);
    }
    setShowPicker(!showPicker);
  };

  const updateGoal = () => {
    log('In updateGoal, newGoal is:', newGoal);
    updateSleep(newGoal);
    updateBedtime(newBedtime);
    changeSleepGoal(newGoal, newBedtime);
  };

  return (
    <>
      <View style={styles.sleepEdit}>
        <TouchableOpacity style={styles.minButton} onPress={subtractFromGoal}>
          <Icon name={'minus'} size={16} color={'white'} />
        </TouchableOpacity>
        <View>
          <Text style={styles.editText}>Edit Time To Sleep</Text>
          <Text style={styles.sleepGoal}>{minutesToHours(newGoal)}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addToGoal}>
          <Icon name={'plus'} size={16} color={'white'} />
        </TouchableOpacity>
      </View>
      {(newGoal !== currentGoal || newBedtime !== currentBedtime) && (
        <BasicButton
          buttonText={'Submit New Goals'}
          onPressButton={updateGoal}
          sleep={true}
        />
      )}
      <View style={styles.sleepEdit}>
        <View>
          <Text style={styles.editText}>Edit Bedtime</Text>
          <Text style={styles.sleepGoal}>{newBedtime}</Text>
        </View>
        <TouchableOpacity style={styles.bedtimeButton} onPress={bedtimePress}>
          <Text style={styles.buttonTitle}>
            {!showPicker ? 'CHOOSE BEDTIME' : 'CLOSE PICKER'}
          </Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <View style={styles.timePicker}>
          <RNDateTimePicker
            themeVariant="light"
            value={timeStringToDate(newBedtime)}
            mode="time"
            display="spinner"
            minuteInterval={15}
            onChange={(event, value) => setNewBedtime(bedtimeString(value))}
            style={styles.datePicker}
          />
        </View>
      )}
    </>
  );
}
