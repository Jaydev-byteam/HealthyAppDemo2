import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './EditSleepGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicButton from '../BasicButton/BasicButton';

export default function EditSleepGoal({
  currentGoal,
  currentBedtime,
  updateSleep,
}) {
  // initialize state variables for new goal bedtime and sleep duration
  const [newGoal, setNewGoal] = useState(currentGoal);
  const [newBed, setNewBed] = useState(currentBedtime);
  // state variable to show bedtime picker
  const [showBedtime, setShowBedtime] = useState(false);

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
  const showPicker = () => {
    setShowBedtime(!showBedtime);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>What Time Do You Usually Go To Bed?</Text>
        <Text style={styles.bedtime}>{currentBedtime}</Text>
        <BasicButton
          buttonText={'Change Bedtime'}
          onPressButton={showPicker}
        />
      </View>
    </>
  );
}
