import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './RegistrationScreenStyles';
import { fstore, fire_auth } from '../../database/FirebaseDefault';

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
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    fire_auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          nickname,
        };
        const usersRef = fstore.collection('users');
        console.log(usersRef);
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log('usersRef added:', usersRef);
            navigation.navigate('Home', {user: data});
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1, width: '100%'}} keyboardShouldPersistTaps="always">
        <Image style={styles.logo} source={require('../../../assets/icon.png')} />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setNickname(text)}
          value={nickname}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {nickname && email && password && password === confirmPassword ? (
          <TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
            <Text style={styles.buttonTitle}>Create account</Text>
          </TouchableOpacity>
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
