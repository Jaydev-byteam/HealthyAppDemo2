import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import styles from './SetStepsGoalStyles';
import images from '../../../assets/images';

export default function SetStepsGoal({navigation}) {
  const [currentSteps, setCurrentSteps] = useState(5000);

  const navigateToPage = pageRoute => {
    navigation.navigate(pageRoute);
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
        </View>
        <BasicButton
          buttonText="Next"
          onPressButton={navigateToPage('Main')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
