import {fire_auth, fstore} from './FirebaseDefault';
import dayjs from "dayjs";

export const unixTimeStamp = () => dayjs().unix(); // seconds
export const unixTimeStampMilliseconds = () => dayjs().valueOf(); // milliseconds for backend
export const timeStampISO = () => dayjs().format();

export const updateCurrentSteps = value => {
  // grab a timestamp
  const timestamp = dayjs();
  console.log('Date object:', timestamp);
  let isoTimestamp = timestamp.toISOString();
  let unixTimestamp = Math.floor(timestamp.getTime() / 1000);
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('current_day_steps')
    .doc(isoTimestamp)
    .set(
      {
        unix_timestamp: unixTimestamp,
        steps: value,
      },
      {merge: true},
    )
    .then(res => {
      console.log('Firestore updated with current step data value: ', value);
    })
    .catch(err => {
      console.error(`Error updating current steps ${err}`);
    });
};

export const tenDaySteps = value => {
  // grab a timestamp
  const timestamp = new Date();
  console.log('Date object:', timestamp);
  let isoTimestamp = timestamp.toISOString();
  let unixTimestamp = Math.floor(timestamp.getTime() / 1000);
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('ten_day_steps')
    .doc(isoTimestamp)
    .set(
      {
        unix_timestamp: unixTimestamp,
        steps: value,
      },
      {merge: true},
    )
    .then(res => {
      console.log('Firestore updated with ten-day step data value: ', value);
    })
    .catch(err => {
      console.error(`Error updating ten-day steps ${err}`);
    });
};
