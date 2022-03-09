import React from 'react';
import {TextInput} from "react-native";
import styles from './InputFieldStyles';

export default function InputField({placeholderText, textChangeFunction, field}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholderText}
      placeholderTextColor="#aaaaaa"
      onChangeText={textChangeFunction}
      value={field}
      keyboardType={field===}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
  )
}
