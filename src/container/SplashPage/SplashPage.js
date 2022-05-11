import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BasicButton from '../../components/BasicButton/BasicButton';

import styles from './SplashPageStyles';
import images from '../../../assets/images';
import { styleConstants } from "../../_constants/StyleConstants";

export default function SplashPage({navigation}) {
  const getStartedPress = () => {
    navigation.navigate('Registration');
  };
  const signInPress = () => {
    navigation.navigate('Login');
  };
  console.log('In Splash Page');
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.splashTitle}>Welcome to BetterHealth!</Text>
        <Text style={styles.subtitle}>An app for improving health habits.</Text>
        <Image source={images.splashGraphic} style={styles.image} />
        <BasicButton
          buttonText={'Get Started'}
          onPressButton={getStartedPress}
        />
        <BasicButton buttonText={'Sign In'} onPressButton={signInPress} alt={true} />
      </KeyboardAwareScrollView>
    </View>
  );
}
