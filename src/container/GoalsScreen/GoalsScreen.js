import * as React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import {cityBackground} from '../../../assets/images';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Page'} />
        <View style={{flex: 1,
          flexDirection: 'row',
          justifyContent: 'center', alignItems: 'center'}}>

          <GoalCard
            style={styles.card}
            image={images.stepsIcon}
            goalTitle={'Steps'}
            goalAmount={'5,000'}
            goalUnit={'steps/day'}
            goalProgress={0.4}
          />
          <GoalCard
            style={styles.card}
            image={images.sleepTime}
            goalTitle={'Sleep Time'}
            goalAmount={'7.5'}
            goalUnit={'hours/day'}
            goalProgress={0.8}
          />

        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
