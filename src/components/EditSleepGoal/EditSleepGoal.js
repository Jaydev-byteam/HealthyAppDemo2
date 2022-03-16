import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './EditSleepGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicButton from '../BasicButton/BasicButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function EditSleepGoal({
  currentGoal,
  currentBedtime,
  updateSleep,
  bedtimeString,
}) {
  // initialize state variables for new goal bedtime and sleep duration
  const [newGoal, setNewGoal] = useState(currentGoal);
  const [newBed, setNewBed] = useState(currentBedtime);
  // state variable to show bedtime picker
  const [showPicker, setShowPicker] = useState(false);
  const dummyBedtime = new Date();
  const today = new Date();
  dummyBedtime.setHours(22, 30);
  let dummyBedtimeString = bedtimeString(dummyBedtime);
  console.log('Dummy bedtime string is: ', dummyBedtimeString);
  console.log('Dummy bedtime object is: ', dummyBedtime);

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

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>What Time Do You Usually Go To Bed?</Text>
        <Text style={styles.bedtime}>{bedtimeString(dummyBedtime)}</Text>

        <BasicButton
          buttonText={'Change Bedtime'}
          onPressButton={() => setShowPicker(!showPicker)}
        />

        {showPicker && (
          <RNDateTimePicker
            value={dummyBedtime}
            mode="time"
            display="spinner"
            minuteInterval={10}
            style={styles.datePicker}
          />
        )}
      </View>
    </>
  );
}
