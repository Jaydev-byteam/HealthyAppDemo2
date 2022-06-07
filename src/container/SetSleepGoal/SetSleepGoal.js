import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './SetSleepGoalStyles';
import images from '../../../assets/images';
import {fire_auth} from '../../database/FirebaseDefault';
import {changeSleepDurationGoal} from '../../database/FirebaseWrite';
import {minusIcon, plusIcon} from '../../_constants/IconConstants';
import {minutesToHours} from '../../_utilities/UtilityFunctions';
import {log} from '../../_utilities/UtilityFunctions';
import StepperFooter from '../../components/StepperFooter/StepperFooter';

export default function SetSleepGoal({navigation}) {
  const [sleepGoal, setSleepGoal] = useState(480);

  const addToGoal = () => {
    if (sleepGoal + 15 <= 720) {
      setSleepGoal(sleepGoal + 15);
    } else {
      alert('Maximum daily sleep goal is 12 hours');
    }
  };
  const subtractFromGoal = () => {
    if (sleepGoal - 15 >= 240) {
      setSleepGoal(sleepGoal - 15);
    } else {
      alert('Minimum daily sleep goal is 4 hours.');
    }
  };

  const onNextButton = () => {
    log('Navigate to main fired');
    changeSleepDurationGoal(sleepGoal);
    navigation.navigate('SetBedtimeGoal');
  };
  const onPrevButton = () => {
    navigation.navigate('StepsPermission');
  };

  log('In SetSleepGoal');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Set Up Your Sleep Goal'} showIcon={false} />
        <View style={styles.mainCard}>
          <Image style={styles.cardLogo} source={images.sleepIcon} />
          <Text style={styles.goalQuery}>
            How much sleep do you typically need to feel rested?
          </Text>
          <View style={styles.goalAdjust}>
            <TouchableOpacity
              style={styles.minButton}
              onPress={subtractFromGoal}>
              {minusIcon}
            </TouchableOpacity>
            <View>
              <Text style={styles.editText}>Time to Sleep</Text>
              <Text style={styles.sleepGoal}>{minutesToHours(sleepGoal)}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addToGoal}>
              {plusIcon}
            </TouchableOpacity>
          </View>
          <View style={styles.sleepGoalGraphic}>
            <Image source={images.sleepGraphic} style={styles.sleepImage} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StepperFooter
        position={2}
        onNextPress={onNextButton}
        onPrevPress={onPrevButton}
      />
    </View>
  );
}
