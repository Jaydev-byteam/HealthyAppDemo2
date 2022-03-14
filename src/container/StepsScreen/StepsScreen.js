import * as React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './StepsScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome';


const weeklyAverageSteps = 0;


export default function StepsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Goals")}
          >
            <Icon name={"chevron-left"} size={30} color="white" />
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
}
