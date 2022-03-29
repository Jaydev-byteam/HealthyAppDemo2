import {fstore, fire_auth} from './FirebaseDefault';
import {
  stepsGoalObject,
  userObject,
  sleepGoalObject,
} from '../_constants/EmptyObjectConstants';

import logError from 'react-native/Libraries/Utilities/logError';

export const getStepsGoal = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('steps')
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('in getStepsGoal, doc data is:', docSnapshot.data());
        stepsGoalObject.goals = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error.stack);
    });
};

export const getStepsScores = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('steps')
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('in getStepsScores, doc data is:', docSnapshot.data());
        stepsGoalObject.scores = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error.stack);
    });
};

export const getSleepGoal = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('sleep')
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('in getSleepGoal, doc data is:', docSnapshot.data());
        sleepGoalObject.goals = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error.stack);
    });
};

export const getSleepScores = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('sleep')
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('in getSleepScores, doc data is:', docSnapshot.data());
        sleepGoalObject.scores = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error.stack);
    });
};

export const getUserNickname = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .get()
    .then(doc => {
      if (doc !== null && doc.exists) {
        console.log(
          'in getUserNickname, doc data nickname is:',
          doc.data().nickname,
        );
        userObject.nickname = doc.data().nickname;
        console.log('in getUserNickname, userObject is:', userObject.nickname);
      }
    })
    .catch(e => {
      logError('error getting user nickname', e.stack);
    });
};
