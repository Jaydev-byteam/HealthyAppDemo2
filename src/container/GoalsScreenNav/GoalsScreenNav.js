import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepsScreen from '../StepsScreen/StepsScreen';
import SleepScreen from '../SleepScreen/SleepScreen';
import GoalsScreenMain from '../GoalsScreen/GoalsScreen';
import {getStepsGoal} from '../../database/FirebaseGet';
import {log, logError} from '../../_utilities/UtilityFunctions';

const GoalsStack = createNativeStackNavigator();

export default function GoalsScreenNav({navigation, user}) {
  const [stepsGoal, setStepsGoal] = useState(0);

  log('In Goals Screen, navigation is: ', navigation);
  log('GS User is:', user);
  useEffect(() => {
    getStepsGoal(setStepsGoal);
  }, []);
  return (
    <GoalsStack.Navigator initialRouteName="GoalsMain">
      <GoalsStack.Screen name="GoalsMain">
        {navigation => <GoalsScreenMain navigation={navigation} />}
      </GoalsStack.Screen>
      <GoalsStack.Screen name="Steps">
        {props => <StepsScreen user={user} navigation={navigation} />}
      </GoalsStack.Screen>
      <GoalsStack.Screen
        name="Sleep"
        component={props => <SleepScreen user={user} navigation={navigation} />}
      />
    </GoalsStack.Navigator>
  );
}
