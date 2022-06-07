import {MDHealthKitManager} from './HealthKit';
import {updateCurrentSteps, tenDaySteps} from '../database/FirebaseWrite';
import {stepsGoalObject} from '../_constants/EmptyObjectConstants';
import {log, logError} from './UtilityFunctions';

export const getHKCurrDaySteps = () => {
  // current daily step count functions
  (async () => {
    await MDHealthKitManager.RNCurrentStepCount(async value => {
      if (value === null || value === undefined || isNaN(value)) {
        await updateCurrentSteps(0);
        logError('In getHKCDS, value was falsy');
      }
      if (!isNaN(value)) {
        await updateCurrentSteps(value);
        log('In getHKCDS, data passed is:', value);
        stepsGoalObject.scores.daily_steps = value;
      } else {
        await updateCurrentSteps(0);
        log('In getHKCDS else block.');
      }
    });
  })();
};

export const getHKTenDayTotSteps = () => {
  // current ten-day step count functions
  (async () => {
    await MDHealthKitManager.RNTenDayStepCount(async value => {
      if (
        value === null ||
        value === undefined ||
        Array.isArray(value) === false
      ) {
        await tenDaySteps(0);
        logError('In getHKTDTS, value was falsy');
      }
      if (Array.isArray(value)) {
        await tenDaySteps(value);
        log('In getHKTDTS, data passed is:', value);
      } else {
        await tenDaySteps(0);
        log('In getHKTDTS else block');
      }
    });
  })();
};
