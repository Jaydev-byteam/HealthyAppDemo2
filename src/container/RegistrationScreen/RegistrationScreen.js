import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './RegistrationScreenStyles';
import {fstore, fire_auth} from '../../database/FirebaseDefault';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function RegistrationScreen({navigation}) {
  // establish the state variables for registration
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };
  let lowercase = /[a-z]/;
  let uppercase = /[A-Z]/;
  let specials = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const passwordValidation = pw => {
    let errors = '';
    if (pw.length < 8) {
      errors += 'Password must be at least 8 characters. ';
    }
    if (!lowercase.test(password)) {
      errors += 'Password must contain a lowercase letter. ';
    }
    if (!uppercase.test(password)) {
      errors += 'Password must contain an uppercase letter. ';
    }
    if (!specials.test(password)) {
      errors +=
        'Password must contain one special character (not a letter or number.) ';
    }
    return errors;
  };

  const onRegisterPress = () => {
    if (passwordValidation(password) !== '') {
      alert(passwordValidation(password));
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    fire_auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
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
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <PageTitle />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setNickname(text)}
          value={nickname}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
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
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Text style={password.length < 8 ? styles.red : styles.green}>
          Password must be at least 8 characters long.
        </Text>
        <Text style={!lowercase.test(password) ? styles.red : styles.green}>
          Password must contain a lowercase letter.
        </Text>
        <Text style={!uppercase.test(password) ? styles.red : styles.green}>
          Password must contain an uppercase letter.
        </Text>
        <Text style={!specials.test(password) ? styles.red : styles.green}>
            Password must contain at least one special character.
        </Text>
        <Text style={password !== confirmPassword ? styles.red : styles.green}>
          Password and confirmation must match.
        </Text>

        {nickname && email && password && password === confirmPassword ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onRegisterPress()}>
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
