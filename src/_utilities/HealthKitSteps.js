import {MDHealthKitManager} from './HealthKit';
import {updateCurrentSteps, tenDaySteps} from '../database/FirebaseWrite';

export const getHKCurrDaySteps = () => {
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
};

export const getHKTenDayTotSteps = () => {
  // current daily step count functions
  (async () => {
    await MDHealthKitManager.RNTenDayStepCount(async value => {
      if (value === null || value === undefined || isNaN(value)) {
        await tenDaySteps(0);
      }
      if (!isNaN(value)) {
        await tenDaySteps(value);
      } else {
        await tenDaySteps(0);
      }
    });
  })();
};
