import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './EditGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicButton from "../BasicButton/BasicButton";

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
    console.log('In onFinalPress, newGoal is:', newGoal)
    updateSteps(newGoal);
  }
  return (
    <>
      <View style={styles.container}>
        <Icon.Button name={'minus'} style={styles.minusButton} onPress={subtractFromGoal}/>
        <View>
          <Text style={styles.editText}>Edit Daily Steps Goal</Text>
          <Text style={styles.stepsGoal}>{newGoal.toLocaleString()}</Text>
        </View>


        <Icon.Button name={'plus'} style={styles.plusButton} onPress={addToGoal}/>

      </View>
      {/*<View style={styles.editBar}>*/}
      {/*  <Icon.Button name={'minus'} style={styles.minusButton} onPress={subtractFromGoal}/>*/}
      {/*  <Text style={styles.note}>{newGoal.toLocaleString()} Steps</Text>*/}
      {/*  <Icon.Button name={'plus'} style={styles.button} onPress={addToGoal}/>*/}
      {/*</View>*/}
      {(newGoal !== currentGoal) &&
        <BasicButton style={styles.submitButton} buttonText={'SAVE EDITS'} onPressButton={onFinalPress} />
      }
    </>
  );
}
