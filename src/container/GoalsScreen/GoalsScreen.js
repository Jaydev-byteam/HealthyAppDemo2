import * as React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <PageTitle pageName={'Goals Page'} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}