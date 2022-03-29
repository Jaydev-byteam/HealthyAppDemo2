import {fire_auth, fstore} from './FirebaseDefault';

export const updateCurrentSteps = value => {
  // grab a timestamp
  const timestamp = Date.now();
  let isoTimestamp = timestamp.toISOString();
  let unixTimestamp = Math.floor(timestamp / 1000);
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
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('steps')
    .set(
      {
        ten_day_steps: value,
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
