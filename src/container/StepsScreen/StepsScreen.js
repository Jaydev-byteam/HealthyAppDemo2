import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
// import Icon from 'react-native-vector-icons/FontAwesome';

const weeklyAverageSteps = 0;

export default function StepsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
          <Text style={styles.backButtonText}>&#8629;</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>
          Hit Daily Steps
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
}
