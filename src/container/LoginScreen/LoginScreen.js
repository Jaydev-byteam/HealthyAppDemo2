import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginScreenStyles';

import Icon from "react-native-vector-icons/FontAwesome";
import {checkForDelete, loginNewUser} from '../../database/FirebaseAuth';
import {askLocation} from '../../_utilities/PermissionUtilities';

// importing custom dumb components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import InputField from '../../components/InputField/InputField';

import {MDHealthKitManager} from '../../_utilities/HealthKit';

// import hook to toggle password visibility
import {useTogglePasswordVisibility} from '../../_hooks/useTogglePasswordVisibility';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = async () => {
    await loginNewUser(email, password);
    await checkForDelete();
  };

  const onAuthPress = () => {
    MDHealthKitManager.requestAuthorization();
    askLocation();
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <PageTitle showIcon={false} />
        <InputField
          placeholder={'Email'}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'email-address'}
        />
        <View style={styles.inputContainer}>
          <InputField
            style={styles.passwordInput}
            placeholder={'Password'}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
          />
          <Pressable
            style={styles.eyeButton}
            onPress={handlePasswordVisibility}>
            <Icon name={rightIcon} size={22} color={'#708090'} />
          </Pressable>
        </View>

        <BasicButton buttonText="Log in" onPressButton={onLoginPress} />
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
