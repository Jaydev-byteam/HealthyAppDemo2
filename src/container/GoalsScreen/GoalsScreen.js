import * as React from 'react';
import {View, ImageBackground} from 'react-native';
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <PageTitle pageName={'Goals Page'} />
          <GoalCard
            image={images.stepsIcon}
            goalTitle={'Steps'}
            goalAmount={'5,000'}
            goalUnit={'steps/day'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
