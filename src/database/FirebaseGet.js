import {fstore, fire_auth} from './FirebaseDefault';

import logError from 'react-native/Libraries/Utilities/logError';

export const getStepsGoal = async (stepsGoalObject) => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('steps')
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        console.log('in getStepsGoal, doc data is:', docSnapshot.data());
        stepsGoalObject.goals = docSnapshot.data();
      }
    })
    .catch((error) => {
      logError(error.stack);
    });
};

export const getStepsScores = async (stepsGoalObject) => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('steps')
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        console.log('in getStepsScores, doc data is:', docSnapshot.data());
        stepsGoalObject.scores = docSnapshot.data();
      }
    })
    .catch((error) => {
      logError(error.stack);
    });
};

export const getUserNickname = async changeHandler => {
  try {
    const userDoc = await fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .onSnapshot(doc => {
        if (doc !== null && doc.exists) {
          console.log('in getUserNickname, doc data is:', doc.data());
          return 'nickname' in doc.data()
            ? changeHandler(doc.data().nickname)
            : changeHandler('');
        }
      });
    return () => userDoc();
  } catch (e) {
    logError('error getting user nickname', e.stack);
  }
};

export const getSleepGoal = async (sleepGoalObject) => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('sleep')
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        console.log('in getSleepGoal, doc data is:', docSnapshot.data());
        sleepGoalObject.goals = docSnapshot.data();
      }
    })
    .catch((error) => {
      logError(error.stack);
    });
};
