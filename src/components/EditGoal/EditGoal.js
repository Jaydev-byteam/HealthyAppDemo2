import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './EditGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicButton from '../BasicButton/BasicButton';

export default function EditGoal({currentGoal, updateSteps}) {
  const [newGoal, setNewGoal] = useState(currentGoal);
  const addToGoal = () => {
    if (newGoal + 500 <= 15000) {
      setNewGoal(newGoal + 500);
    } else {
      alert('Maximum daily steps goal is 15,000');
    }
  };
  const subtractFromGoal = () => {
    if (newGoal - 500 >= 0) {
      setNewGoal(newGoal - 500);
    } else {
      alert('Minimum daily steps goal is 0.');
    }
  };
  const onFinalPress = () => {
    console.log('In onFinalPress, newGoal is:', newGoal);
    updateSteps(newGoal);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.minButton} onPress={subtractFromGoal}>
          <Icon name={'minus'} size={16} color={'white'} />
        </TouchableOpacity>
        <View>
          <Text style={styles.editText}>Edit Daily Steps Goal</Text>
          <Text style={styles.stepsGoal}>{newGoal.toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addToGoal}>
          <Icon name={'plus'} size={16} color={'white'} />
        </TouchableOpacity>
      </View>
      {newGoal !== currentGoal && (
        <BasicButton
          style={styles.submitButton}
          buttonText={'SAVE EDITS'}
          onPressButton={onFinalPress}
        />
      )}
    </>
  );
}
