import React from 'react';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fire_auth} from '../../database/FirebaseDefault';
import logError from 'react-native/Libraries/Utilities/logError';
import createStackNavigator from 'react-native-screens/createNativeStackNavigator';

import ComboStackNavigator from '../ComboStackNavigator/ComboStackNavigator';

export const PostSplashNavigator = () => {
  const [initialRouteName, setInitialRouteName] = useState('Main');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getIsOnboardingComplete = async () => {
      try {
        let isOnboardingComplete = await AsyncStorage.getItem(
          ONBOARDING_COMPLETE_KEY,
        );
        // if the key doesn't exist, then the user hasn't completed onboarding
        // which means it is the user's first time running the app
        if (isOnboardingComplete === null) {
          const onboardingData = JSON.stringify({
            id: fire_auth.currentUser.uid,
            completed: false,
          });
          AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, onboardingData);
          isOnboardingComplete = onboardingData;
        }
        return JSON.parse(isOnboardingComplete);
      } catch (e) {
        logError(
          `error attempting to get key: ${ONBOARDING_COMPLETE_KEY} from AsyncStorage`,
          e.stack,
        );
      }
    };

    if (isLoading) {
      getIsOnboardingComplete().then(isOnboardingComplete => {
        // this function will prevent new accounts from skipping onboarding when a previous
        // account was created on the same device. AsyncStorage persists within the app
        // If app is uninstalled, AsyncStorage data is wiped
        if (
          !isOnboardingComplete.completed ||
          fire_auth.currentUser.uid !== isOnboardingComplete.id
        ) {
          setInitialRouteName('SetGoal');
        }
        setIsLoading(false);
      });
    }
  }, []);

  const Stack = createStackNavigator();
  return (
    <>
      {isLoading ? null : (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            gestureEnabled: false,
            headerShown: false,
          }}>
          <>
            <Stack.Screen name="SetGoal" component={setGoal} />
            <Stack.Screen name="Main">
              {props => (
                <ComboStackNavigator {...props} />
              )}
            </Stack.Screen>
          </>
        </Stack.Navigator>
      )}
    </>
  );
};
