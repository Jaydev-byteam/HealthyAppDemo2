import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './SetStepsGoalStyles';
import images from '../../../assets/images';
import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {fire_auth} from '../../database/FirebaseDefault';
import {changeStepGoal} from '../../database/FirebaseWrite';
import {minusIcon, plusIcon} from '../../_constants/IconConstants';

export default function SetStepsGoal({navigation}) {
  const [stepsGoal, setStepsGoal] = useState(5000);

  const addToGoal = () => {
    if (stepsGoal + 500 <= 15000) {
      setStepsGoal(stepsGoal + 500);
    } else {
      alert('Maximum daily steps goal is 15,000');
    }
  };
  const subtractFromGoal = () => {
    if (stepsGoal - 500 >= 0) {
      setStepsGoal(stepsGoal - 500);
    } else {
      alert('Minimum daily steps goal is 0.');
    }
  };

  const onNextButton = () => {
    console.log('Navigate to steps permission fired');
    // saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, {
    //   id: fire_auth.currentUser.uid,
    //   completed: true,
    // });
    changeStepGoal(stepsGoal);
    navigation.navigate('StepsPermission');
  };

  console.log('In SetStepsGoal');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Set Up Your Steps Goal'} showIcon={false} />
        <View style={styles.mainCard}>
          <Image style={styles.cardLogo} source={images.stepsIcon} />
          <Text style={styles.goalQuery}>
            How many steps would you like to get each day?
          </Text>
          <View style={styles.goalAdjust}>
            <TouchableOpacity
              style={styles.minButton}
              onPress={subtractFromGoal}>
              {minusIcon}
            </TouchableOpacity>
            <View>
              <Text style={styles.editText}>Daily Steps Goal</Text>
              <Text style={styles.stepsGoal}>{stepsGoal.toLocaleString()}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addToGoal}>
              {plusIcon}
            </TouchableOpacity>
          </View>
          <View style={styles.stepsGoalGraphic}>
            <Image source={images.stepsGraphic} style={styles.stepsImage} />
          </View>
        </View>
        <BasicButton buttonText="Next" onPressButton={onNextButton} />
      </KeyboardAwareScrollView>
    </View>
  );
}
