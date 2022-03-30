import {fire_auth, fstore} from './FirebaseDefault';
import dayjs from "dayjs";

export const unixTimeStamp = () => dayjs().unix(); // seconds
export const unixTimeStampMilliseconds = () => dayjs().valueOf(); // milliseconds for backend
export const timeStampISO = () => dayjs().format();

export const updateCurrentSteps = stepsData => {

  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('current_day_steps')
    .add({
      iso: timeStampISO(),
      unix: unixTimeStamp(),
      data: stepsData,
    })
    .then(res => {
      console.log('Firestore updated with current step data value: ', stepsData);
    })
    .catch(err => {
      console.error(`Error updating current steps ${err}`);
    });
};

export const tenDaySteps = stepsData => {

  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('ten_day_steps')
    .add({
      iso: timeStampISO(),
      unix: unixTimeStamp(),
      data: stepsData,
    })
    .then(res => {
      console.log('Firestore updated with ten-day step data value: ', stepsData);
    })
    .catch(err => {
      console.error(`Error updating ten-day steps ${err}`);
    });
};
