import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './PageTitleStyles';

// Creating a component for a page title and the logo. First component build
export default function PageTitle({pageName = 'Healthy App', showIcon = true}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{pageName}</Text>
      {showIcon && <Image style={styles.logo} source={require('../../../assets/icon.png')} />}
    </View>
  );
}
