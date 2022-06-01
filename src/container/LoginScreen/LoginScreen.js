import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginScreenStyles';
import {checkForDelete, loginNewUser} from '../../database/FirebaseAuth';
import {askLocation} from '../../_utilities/PermissionUtilities';

// importing custom dumb components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import InputField from '../../components/InputField/InputField';

import {MDHealthKitManager} from '../../_utilities/HealthKit';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          style={styles.input}
          placeholder={'Email'}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'email-address'}
        />
        <InputField
          placeholder={'Password'}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
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
