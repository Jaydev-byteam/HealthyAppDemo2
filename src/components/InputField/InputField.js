import React from 'react';
import {TextInput} from 'react-native';
import styles from './InputFieldStyles';

export default function InputField(props) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#aaaaaa"
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
  );
}
