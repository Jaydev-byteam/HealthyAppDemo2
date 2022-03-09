import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginScreenStyles';
import {fstore, fire_auth} from '../../database/FirebaseDefault';

// importing custom dumb components
import PageTitle from '../../components/PageTitle/PageTitle';
import BasicButton from '../../components/BasicButton/BasicButton';
import InputField from "../../components/InputField/InputField";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    fire_auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const usersRef = fstore.collection('users');
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert('User does not exist.');
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate('Home', {user});
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
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  placeholder="E-mail"*/}
        {/*  placeholderTextColor="#aaaaaa"*/}
        {/*  onChangeText={text => setEmail(text)}*/}
        {/*  value={email}*/}
        {/*  underlineColorAndroid="transparent"*/}
        {/*  autoCapitalize="none"*/}
        {/*  keyboardType={'email-address'}*/}
        {/*/>*/}
        <InputField
          placeholder={"Email"}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={"email-address"}
        />
        <InputField
          placeholder={"Password"}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  placeholderTextColor="#aaaaaa"*/}
        {/*  secureTextEntry*/}
        {/*  placeholder="Password"*/}
        {/*  onChangeText={text => setPassword(text)}*/}
        {/*  value={password}*/}
        {/*  underlineColorAndroid="transparent"*/}
        {/*  autoCapitalize="none"*/}
        {/*/>*/}
        <BasicButton
          buttonText="Log in"
          onPressButton={onLoginPress} />
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
