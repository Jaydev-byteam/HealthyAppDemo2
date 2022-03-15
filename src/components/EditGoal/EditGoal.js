import React from 'react';
import {Text, View} from 'react-native';
import styles from './EditGoalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function EditGoal({currentGoal}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Daily Steps Goal</Text>
      </View>
      <View style={styles.editBar}>
        <Icon.Button
          name={'minus'}
          style={styles.button}
        />
        <Text style={styles.note}>{currentGoal.toLocaleString()} Steps</Text>
        <Icon.Button
          name={'plus'}
          style={styles.button}
        />
      </View>

    </>

  );
}


