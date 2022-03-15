import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './WeeklyTableStyles';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';


export default function WeeklyTable({weeklyResult}) {
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const marks = weeklyResult.map(day => day ? '*'  : '');


  return (
    // <View style={styles.container}>
      <Table borderStyle={styles.table}>
        <Row data={daysOfTheWeek} style={styles.head} textStyle={styles.text}/>
        <Row data={marks} textStyle={styles.text}/>
      </Table>
    // </View>
  );


}
