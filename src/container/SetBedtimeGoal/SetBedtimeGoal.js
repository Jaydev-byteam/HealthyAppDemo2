import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import styles from './SetBedtimeGoalStyles';
import images from '../../../assets/images';
import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {fire_auth} from '../../database/FirebaseDefault';
import {changeBedtimeGoal} from '../../database/FirebaseWrite';
import {minusIcon, plusIcon} from '../../_constants/IconConstants';
import {
  minutesToHours,
  timeStringToDate,
  bedtimeString,
} from '../../_utilities/UtilityFunctions';

export default function SetBedtimeGoal({navigation}) {
  // initialize state variable for the goal bedtime
  const [bedtime, setBedtime] = useState('10:00 PM');
  // state variable to show bedtime picker
  const [showPicker, setShowPicker] = useState(false);

  const bedtimePress = () => {
    if (showPicker) {
      console.log('Bedtime selected:', bedtime);
    }
    setShowPicker(!showPicker);
  }

  const onNextButton = async () => {
    console.log('Navigate to main fired');
    // await saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, {
    //   id: fire_auth.currentUser.uid,
    //   completed: true,
    // });
    await changeBedtimeGoal(bedtime);
    navigation.navigate('LocationPermission');
  };
  console.log('In SetBedtimeGoal');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Set Up Your Sleep Goal'} showIcon={false} />
        <View style={styles.mainCard}>
          <Image style={styles.cardLogo} source={images.sleepIcon} />
          <Text style={styles.goalQuery}>
            What time do you want to go to bed during the week?
          </Text>
          <View style={styles.sleepEdit}>
            <View>
              <Text style={styles.editText}>Edit Bedtime</Text>
              <Text style={styles.sleepGoal}>{bedtime}</Text>
            </View>
            <TouchableOpacity
              style={styles.bedtimeButton}
              onPress={bedtimePress}>
              <Text style={styles.buttonTitle}>
                {!showPicker ? 'CHOOSE BEDTIME' : 'CLOSE PICKER'}
              </Text>
            </TouchableOpacity>
          </View>
          {showPicker && (
            <View style={styles.timePicker}>
              <RNDateTimePicker
                value={timeStringToDate(bedtime)}
                mode="time"
                display="spinner"
                minuteInterval={15}
                onChange={(event, value) => setBedtime(bedtimeString(value))}
                style={styles.datePicker}
              />
            </View>
          )}
          {/*<View style={styles.goalAdjust}>*/}
          {/*  <TouchableOpacity*/}
          {/*    style={styles.minButton}*/}
          {/*    onPress={subtractFromGoal}>*/}
          {/*    {minusIcon}*/}
          {/*  </TouchableOpacity>*/}
          {/*  <View>*/}
          {/*    <Text style={styles.editText}>Time to Sleep</Text>*/}
          {/*    <Text style={styles.sleepGoal}>{minutesToHours(sleepGoal)}</Text>*/}
          {/*  </View>*/}
          {/*  <TouchableOpacity style={styles.addButton} onPress={addToGoal}>*/}
          {/*    {plusIcon}*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          <View style={styles.sleepGoalGraphic}>
            <Image source={images.sleepGraphic} style={styles.sleepImage} />
          </View>
        </View>
        <BasicButton buttonText="Next" onPressButton={onNextButton} />
      </KeyboardAwareScrollView>
    </View>
  );
}
