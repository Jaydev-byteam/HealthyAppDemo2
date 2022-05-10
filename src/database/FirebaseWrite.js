import {fire_auth, fstore} from './FirebaseDefault';
import dayjs from 'dayjs';

export const unixTimeStamp = () => dayjs().unix(); // seconds
export const unixTimeStampMilliseconds = () => dayjs().valueOf(); // milliseconds for backend
export const timeStampISO = () => dayjs().format();

export const updateCurrentSteps = async stepsData => {
  try {
    await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('current_day_steps')
      .add({
        iso: timeStampISO(),
        unix: unixTimeStamp(),
        data: stepsData,
      });
    console.log('Firestore updated with current step data value: ', stepsData);
  } catch (err) {
    console.error(`Error updating current steps ${err}`);
  }
};

export const tenDaySteps = async stepsData => {
  try {
    await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('ten_day_steps')
      .add({
        iso: timeStampISO(),
        unix: unixTimeStamp(),
        data: stepsData,
      });
    console.log('Firestore updated with ten day step data value: ', stepsData);
  } catch (err) {
    console.error(`Error updating ten-day steps ${err}`);
  }
};

export const changeStepGoal = async newStepGoal => {
  try {
    await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('steps')
      .set({
        dailyStepGoal: newStepGoal,
      });
    console.log('Firestore updated with new daily step goal: ', newStepGoal);
  } catch (err) {
    console.error('Error updating daily step goal: ', err);
  }
};

export const changeSleepGoal = async (newSleepGoal, newBedtime) => {
  try {
    await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('sleep')
      .set({
        sleep_duration: newSleepGoal,
        sleep_bedtime: newBedtime,
      });
    console.log(
      'Firestore updated with new sleep duration goal:',
      newSleepGoal,
    );
  } catch (err) {
    console.error('Error updating sleep duration goal:', err);
  }
};

export const changeSleepDurationGoal = async newSleepDurationGoal => {
  try {
    await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('sleep')
      .set(
        {
          sleep_duration: newSleepDurationGoal,
        },
        {merge: true},
      );
  } catch (err) {
    console.error('Error updating sleep duration during onboarding:', err);
  }
};
