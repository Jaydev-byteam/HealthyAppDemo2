import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './PageTitleStyles';

// Creating a component for a page title and the logo. First component build
export default function PageTitle({pageName = 'Healthy App', showIcon = true, onSleep= false}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={pageName === 'Sleep More' ? styles.sleepTitleText : styles.titleText}>{pageName}</Text>
      {showIcon && <Image style={styles.logo} source={require('../../../assets/icon.png')} />}
    </View>
  );
}
