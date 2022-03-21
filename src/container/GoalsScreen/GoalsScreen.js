import * as React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './GoalsScreenStyles';
import GoalCard from '../../components/GoalCard/GoalCard';
import images from '../../../assets/images/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepsScreen from '../StepsScreen/StepsScreen';
import SleepScreen from '../SleepScreen/SleepScreen';
import { fstore } from "../../database/FirebaseDefault";

function GoalsScreenMain({navigation, id}) {
  console.log('In Goals Screen Main, navigation is: ', navigation);
  console.log('GSM User is:', id);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PageTitle pageName={'Goals Page'} showIcon={false} />
        <GoalCard
          image={images.stepsIcon}
          goalTitle={'Steps'}
          goalAmount={'5,000'}
          goalUnit={'steps/day'}
          goalProgress={0.98}
          navigation={navigation}
          destination={'Steps'}
        />
        <GoalCard
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

export default function GoalsScreen({navigation, user}) {
  const userData
  // console.log('In Goals Screen with props:', props);
  console.log('In Goals Screen, navigation is: ', navigation);
  console.log('GS User is:', user);
  useEffect
  return (
    <GoalsStack.Navigator
      initialRouteName="GoalsMain"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerBackTitle: '',
        headerTintColor: 'white',
      }}>
      {/*<GoalsStack.Screen name="GoalsMain"*/}
      {/*  component={GoalsScreenMain}*/}
      {/*/>*/}
      <GoalsStack.Screen name="GoalsMain">
        {(navigation) => (
          <GoalsScreenMain id={user.id} navigation={navigation} />
        )}
      </GoalsStack.Screen>
      {/*<GoalsStack.Screen name="Steps"*/}
      {/*  component={StepsScreen}*/}
      {/*/>*/}
      <GoalsStack.Screen name="Steps">
        {(props) => (
          <StepsScreen user={user} navigation={navigation} />
        )}
      </GoalsStack.Screen>
      <GoalsStack.Screen name="Sleep">
        {(props) => (
          <SleepScreen user={user} navigation={navigation} />
          )}
      </GoalsStack.Screen>
    </GoalsStack.Navigator>
  );
}
