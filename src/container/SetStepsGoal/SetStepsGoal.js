import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import EditGoal from "../../components/EditGoal/EditGoal";
import styles from './SetStepsGoalStyles';
import images from '../../../assets/images';
import {
  ONBOARDING_COMPLETE_KEY,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import {fire_auth} from '../../database/FirebaseDefault';

export default function SetStepsGoal({navigation}) {
  const [currentSteps, setCurrentSteps] = useState(5000);

  const onNextButton = () => {
    console.log('Navigate to main fired');
    saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, {
      id: fire_auth.currentUser.uid,
      completed: true,
    });
    navigation.navigate('Main');
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
          <EditGoal currentGoal={currentSteps} updateSteps={setCurrentSteps} />
        </View>
        <BasicButton buttonText="Next" onPressButton={onNextButton} />
      </KeyboardAwareScrollView>
    </View>
  );
}
