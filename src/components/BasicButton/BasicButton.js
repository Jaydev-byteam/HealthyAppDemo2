import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './BasicButtonStyles';

// Creating a component for a basic button. Allowing for a couple different style configurations.
export default function BasicButton({
  buttonText,
  onPressButton,
  sleep = false,
  alt = false,
}) {
  return (
    <TouchableOpacity
      style={
        !sleep && !alt
          ? styles.defaultButton
          : sleep
          ? styles.sleepButton
          : styles.altButton
      }
      onPress={onPressButton}>
      <Text style={!alt ? styles.buttonTitle : styles.altTitle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
