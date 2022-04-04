import {MDHealthKitManager} from './HealthKit';
import {updateCurrentSteps, tenDaySteps} from '../database/FirebaseWrite';

export const getHKCurrDaySteps = () => {
  // current daily step count functions
  (async () => {
    await MDHealthKitManager.RNCurrentStepCount(async value => {
      if (value === null || value === undefined || isNaN(value)) {
        await updateCurrentSteps(0);
        console.log('In getHKCDS, value was falsy');
      }
      if (!isNaN(value)) {
        await updateCurrentSteps(value);
        console.log('In getHKCDS, data passed is:', value);
      } else {
        await updateCurrentSteps(0);
        console.log(('In getHKCDS else block.'));
      }
    });
  })();
};

export const getHKTenDayTotSteps = () => {
  // current daily step count functions
  (async () => {
    await MDHealthKitManager.RNTenDayStepCount(async value => {
      if (value === null || value === undefined || Array.isArray(value) === false) {
        await tenDaySteps(0);
        console.log('In getHKTDTS, value was falsy');
      }
      if (Array.isArray(value)) {
        await tenDaySteps(value);
        console.log('In getHKTDTS, data passed is:', value);
      } else {
        await tenDaySteps(0);
        console.log('In getHKTDTS else block');
      }
    });
  })();
};
