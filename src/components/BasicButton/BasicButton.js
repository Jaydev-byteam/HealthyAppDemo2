import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './BasicButtonStyles';

// Creating a component for a page title and the logo. First component build
export default function BasicButton({buttonText, onPressButton, sleep = false}) {
  return (
    <TouchableOpacity
      style={!sleep ? styles.defaultButton : styles.sleepButton} onPress={onPressButton}>
      <Text style={styles.buttonTitle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
