import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './WeeklyTableStyles';
import {Col, Row, Grid} from 'react-native-easy-grid';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function WeeklyTable({weeklyResult}) {
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const marks = weeklyResult.map(day => (day ? '*' : ''));

  return (
    // <View style={styles.container}>
    //   <Table borderStyle={styles.table}>
    //     <Row data={daysOfTheWeek} style={styles.head} textStyle={styles.text}/>
    //     <Row data={marks} textStyle={styles.text}/>
    //   </Table>
    // </View>

    <Grid style={styles.table}>
      {daysOfTheWeek.map((day, index) => (
        <Col style={styles.column}>
          <Row style={styles.cell}>
            <Text style={styles.text}
            >{day}</Text>
            {weeklyResult[index] &&
              <Icon
                style={styles.checkmark}
                name="check"
                color={'white'} />
            }
          </Row>
        </Col>
      ))}
    </Grid>
  );
}
