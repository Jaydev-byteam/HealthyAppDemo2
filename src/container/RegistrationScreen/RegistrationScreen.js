import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './RegistrationScreenStyles';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import {stepsGoalObject} from "../../_constants/EmptyObjectConstants";
import {
  lowercaseTest,
  uppercaseTest,
  specialsTest,
} from '../../_utilities/RegexFunctions';
import {createNewUser} from '../../database/FirebaseAuth';

// import custom components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import InputField from '../../components/InputField/InputField';

export default function RegistrationScreen({navigation}) {
  // establish the state variables for registration
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    console.log(
      'onRegisterPress active with email/pw/nickname: ',
      email,
      password,
      nickname,
    );
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    createNewUser(email, password, nickname);
  };

  // console.log('In Registration Screen, stepsGoalObject is:', stepsGoalObject);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <PageTitle showIcon={false} />
        <InputField
          style={styles.input}
          placeholder={'Nickname'}
          onChangeText={text => setNickname(text)}
          value={nickname}
        />
        <InputField
          style={styles.input}
          placeholder={'Email'}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <InputField
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <InputField
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
        />
        <View style={styles.validationView}>
          <Text style={password.length < 8 ? styles.error : styles.success}>
            Password must be at least 8 characters long.
          </Text>
          <Text
            style={!lowercaseTest(password) ? styles.error : styles.success}>
            Password must contain a lowercase letter.
          </Text>
          <Text
            style={!uppercaseTest(password) ? styles.error : styles.success}>
            Password must contain an uppercase letter.
          </Text>
          <Text style={!specialsTest(password) ? styles.error : styles.success}>
            Password must contain at least one special character.
          </Text>
          <Text
            style={
              !password || password !== confirmPassword
                ? styles.error
                : styles.success
            }>
            Password and confirmation must match.
          </Text>
        </View>

        {nickname &&
        email &&
        password.length > 7 &&
        password === confirmPassword ? (
          <BasicButton
            buttonText="Create account"
            onPressButton={onRegisterPress}
          />
        ) : null}

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
