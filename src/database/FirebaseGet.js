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

export const getTodaysSteps = async () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('current_day_steps')
    .orderBy('unix', 'desc')
    .limit(1)
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('in getTodaysSteps, doc data is:', docSnapshot.data());
      }
    })
    .catch(error => {
      console.log('in getTodaysSteps catch block');
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

export const stepGoalListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('steps')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          console.log('In stepGoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data().dailyStepGoal);
        }
      });
  } catch (e) {
    logError('error listening to step goals', e.message);
  }
};

export const bedtimeGoalListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('sleep')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          console.log('In bedtimeGoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data().sleep_bedtime);
        }
      });
  } catch (e) {
    logError('error listening to bedtime goals', e.message);
  }
};

export const sleepDurationGoalListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .doc('sleep')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          console.log(
            'In sleepDurationGoalListener, snapshot is:',
            snapshot.data(),
          );
          changeHandler(snapshot.data().sleep_duration);
        }
      });
  } catch (e) {
    logError('error listening to sleep duration goals', e.message);
  }
};

export const goalListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          console.log('In GoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data());
        }
      });
  } catch (e) {
    logError('error listening to sleep duration goals', e.message);
  }
};
