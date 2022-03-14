import * as React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StepsScreen from "../StepsScreen/StepsScreen";

// function StepsScreen({navigation}) {
//   return (
//     <View style={styles.container}>
//       <KeyboardAwareScrollView>
//         <PageTitle pageName={'Steps Goal'} />
//       </KeyboardAwareScrollView>
//     </View>
//   );
// }

function SleepScreen({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Sleep Time Goal'} />
      </KeyboardAwareScrollView>
    </View>
  )
}

function GoalsScreenMain({navigation}) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Page'} />
        <GoalCard
          style={styles.goalCard}
          image={images.stepsIcon}
          goalTitle={'Steps'}
          goalAmount={'5,000'}
          goalUnit={'steps/day'}
          goalProgress={0.98}
          navigation={navigation}
          destination={'Steps'}
        />
        <GoalCard
          style={styles.card}
          image={images.sleepTime}
          goalTitle={'Sleep Time'}
          goalAmount={'7.5'}
          goalUnit={'hours/day'}
          goalProgress={0.8}
          navigation={navigation}
          destination={'Sleep'}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const GoalsStack = createNativeStackNavigator();

export default function GoalsScreen({ navigation, user }) {
  return (
    <GoalsStack.Navigator
      initialRouteName="Goals"
      screenOptions={{
        headerShown: false,
      }}
    >
      <GoalsStack.Screen name="Goals" component={GoalsScreenMain} />
      <GoalsStack.Screen name="Steps" component={StepsScreen} />
      <GoalsStack.Screen name="Sleep" component={SleepScreen} />
    </GoalsStack.Navigator>
  );
}
