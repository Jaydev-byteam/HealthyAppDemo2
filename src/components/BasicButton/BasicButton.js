import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './BasicButtonStyles';

// Creating a component for a page title and the logo. First component build
export default function BasicButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPressButton}>
      <Text style={styles.buttonTitle}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}
