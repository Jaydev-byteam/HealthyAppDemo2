import {MDHealthKitManager} from './HealthKit';
import {Platform} from 'react-native';
import {updateCurrentSteps} from '../database/FirebaseWrite';

export const completion = () => {
  if (Platform.OS === 'ios') {
    // current daily step count functions
    (async () => {
      await MDHealthKitManager.RNCurrentStepCount(async value => {
        if (value === null || value === undefined || isNaN(value)) {
          await updateCurrentSteps(0);
        }
        if (!isNaN(value)) {
          await updateCurrentSteps(value);
        } else {
          await updateCurrentSteps(0);
        }
      });
    })();
  }
};
