import React from 'react';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fire_auth} from '../../database/FirebaseDefault';
import {log, logError} from '../../_utilities/UtilityFunctions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComboStackNavigator from '../ComboStackNavigator/ComboStackNavigator';

import SetStepsGoal from '../SetStepsGoal/SetStepsGoal';

import {
  ONBOARDING_COMPLETE_KEY,
  retrieveFromAsyncStorage,
  saveToAsyncStorage,
} from '../../_utilities/AsyncStorage';
import StepsPermissionScreen from '../StepsPermissionScreen/StepsPermissionScreen';
import SetSleepGoal from '../SetSleepGoal/SetSleepGoal';
import SetBedtimeGoal from '../SetBedtimeGoal/SetBedtimeGoal';
import LocationPermissionScreen from '../LocationPermissionScreen/LocationPermission';
import SettingsRequest from '../SettingsRequest/SettingsRequest';
import OnboardIntro from '../OnboardIntro/OnboardIntro';

export const PostSplashNavigator = () => {
  const [initialRouteName, setInitialRouteName] = useState('Main');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getIsOnboardingComplete = async () => {
      try {
        let isOnboardingComplete = await retrieveFromAsyncStorage(
          ONBOARDING_COMPLETE_KEY,
        );
        // if the key doesn't exist, then the user hasn't completed onboarding
        // which means it is the user's first time running the app
        if (isOnboardingComplete === null) {
          const onboardingData = JSON.stringify({
            id: fire_auth.currentUser.uid,
            completed: false,
          });
          await saveToAsyncStorage(ONBOARDING_COMPLETE_KEY, onboardingData);
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
          setInitialRouteName('OnboardIntro');
        }
        setIsLoading(false);
      });
    }
  }, []);

  log('In PostSplashNavigator');
  const Stack = createNativeStackNavigator();
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
            <Stack.Screen name="OnboardIntro" component={OnboardIntro} />
            <Stack.Screen name="SetStepsGoal" component={SetStepsGoal} />
            <Stack.Screen
              name="StepsPermission"
              component={StepsPermissionScreen}
            />
            <Stack.Screen name="SetSleepGoal" component={SetSleepGoal} />
            <Stack.Screen name="SetBedtimeGoal" component={SetBedtimeGoal} />
            <Stack.Screen
              name="LocationPermission"
              component={LocationPermissionScreen}
            />
            <Stack.Screen name="SettingsRequest" component={SettingsRequest} />
            <Stack.Screen name="Main">
              {props => <ComboStackNavigator {...props} />}
            </Stack.Screen>
          </>
        </Stack.Navigator>
      )}
    </>
  );
};
