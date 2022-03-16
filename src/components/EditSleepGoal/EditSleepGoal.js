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
  updateBedtime,
  bedtimeString,
  minutesToHours,
}) {
  // initialize state variables for new goal bedtime and sleep duration
  const [newGoal, setNewGoal] = useState(currentGoal);
  const [newBed, setNewBed] = useState(currentBedtime);
  // state variable to show bedtime picker
  const [showPicker, setShowPicker] = useState(false);
  // const dummyBedtime = new Date();
  // const today = new Date();
  // dummyBedtime.setHours(22, 30);
  // let dummyBedtimeString = bedtimeString(dummyBedtime);
  console.log('newBed string is: ', bedtimeString(newBed));
  console.log('Dummy bedtime object is: ', newBed);

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
      console.log('In bedtime press, newBed is: ', newBed);
      updateBedtime(newBed);
    }
    setShowPicker(!showPicker);
  }

  const updateGoal = () => {
    console.log('In updateGoal, newGoal is:', newGoal)
    updateSleep(newGoal);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Time Do You Usually Go To Bed?</Text>
      <Text style={styles.bedtime}>{bedtimeString(currentBedtime)}</Text>

      <BasicButton
        buttonText={showPicker ? 'Save New Bedtime' : 'Change Bedtime'}
        onPressButton={bedtimePress}
      />

      {showPicker && (
        <View style={styles.timePicker}>
          <RNDateTimePicker
            value={newBed}
            mode="time"
            display="spinner"
            minuteInterval={15}
            onChange={(event, value) => setNewBed(value)}
            style={styles.datePicker}
          />
        </View>
      )}
      <Text style={styles.title}>
        How much sleep do you need to feel rested?
      </Text>
      <View style={styles.editBar}>
        <Icon.Button name={'minus'} style={styles.button} onPress={subtractFromGoal}/>
        <Text style={styles.note}>{minutesToHours(newGoal)}</Text>
        <Icon.Button name={'plus'} style={styles.button} onPress={addToGoal}/>
      </View>
      {(newGoal !== currentGoal) &&
        <BasicButton buttonText={'Submit New Goal'} onPressButton={updateGoal} />
      }
    </View>
  );
}
