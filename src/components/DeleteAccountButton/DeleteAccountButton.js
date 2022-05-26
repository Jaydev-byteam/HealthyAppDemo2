import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import styles from './DeleteAccountButtonStyles';
import {fire_auth, fstore} from '../../database/FirebaseDefault';
import {log} from '../../_utilities/UtilityFunctions';
import {add2DayCheck} from '../../database/FirebaseWrite';

const onDeletePress = () => {
  Alert.alert(
    'Are You Sure?',
    'If you confirm, in two days, your account and all information associated with it will be deleted.',
    [
      {
        text: 'Cancel',
        onPress: () => log('Cancel Pressed.'),
        style: 'cancel',
      },
      {
        text: 'Confirm Delete',
        onPress: async () => {
          await add2DayCheck();
        },
      },
    ],
  );
};

export default function DeleteAccountButton() {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
      <Text style={styles.buttonTitle}>Delete Account</Text>
    </TouchableOpacity>
  );
}
