import {fstore, fire_auth} from './FirebaseDefault';
import {
  stepsGoalObject,
  userObject,
  sleepGoalObject,
  goalList,
} from '../_constants/EmptyObjectConstants';

import {log, logError} from '../_utilities/UtilityFunctions';

const getGoalScores = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .get()
    .then(docSnap => {
      docSnap.docs.forEach(doc => {
        if (doc.exists) {
          goalList.forEach(goal => {
            if (doc.id === goal.id) {
              goal.scores = doc.data();
            }
          });
        }
      });
    })
    .catch(error => {
      logError(error);
    });
};

const getGoalValues = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .get()
    .then(docSnap => {
      docSnap.docs.forEach(doc => {
        if (doc.exists) {
          goalList.forEach(goal => {
            if (doc.id === goal.id) {
              goal.goals = doc.data();
            }
          });
        }
      });
    })
    .catch(error => {
      logError(error);
    });
};

export const getGoalsFromFirestore = async () => {
  await getGoalScores();
  await getGoalValues();
  return goalList;
};

export const getStepsGoal = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('steps')
    .get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        log('in getStepsGoal, doc data is:', docSnapshot.data());
        stepsGoalObject.goals = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error);
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
        log('in getStepsScores, doc data is:', docSnapshot.data());
        stepsGoalObject.scores = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error);
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
        log('in getTodaysSteps, doc data is:', docSnapshot.data());
      }
    })
    .catch(error => {
      log('in getTodaysSteps catch block');
      logError(error);
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
        log('in getSleepGoal, doc data is:', docSnapshot.data());
        sleepGoalObject.goals = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error);
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
        log('in getSleepScores, doc data is:', docSnapshot.data());
        sleepGoalObject.scores = docSnapshot.data();
      }
    })
    .catch(error => {
      logError(error);
    });
};

export const getUserNickname = async () => {
  await fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .get()
    .then(doc => {
      if (doc !== null && doc.exists) {
        log('in getUserNickname, doc data nickname is:', doc.data().nickname);
        userObject.nickname = doc.data().nickname;
        log('in getUserNickname, userObject is:', userObject.nickname);
      }
    })
    .catch(e => {
      logError('error getting user nickname', e);
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
          log('In stepGoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data().dailyStepGoal);
        }
      });
  } catch (e) {
    logError('error listening to step goals', e);
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
          log('In bedtimeGoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data().sleep_bedtime);
        }
      });
  } catch (e) {
    logError('error listening to bedtime goals', e);
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
          log('In sleepDurationGoalListener, snapshot is:', snapshot.data());
          changeHandler(snapshot.data().sleep_duration);
        }
      });
  } catch (e) {
    logError('error listening to sleep duration goals', e);
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
          log('In GoalListener, snapshot is:', snapshot.data());
          changeHandler();
        }
      });
  } catch (e) {
    logError('error listening to sleep duration goals', e);
  }
};

export const fbaseGoalsListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('goals')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          changeHandler();
        }
      });
  } catch (err) {
    logError('Error listening to firebase gaols', err);
  }
};

export const fbaseScoresListener = async changeHandler => {
  try {
    return fstore
      .collection('users')
      .doc(fire_auth.currentUser.uid)
      .collection('scores')
      .onSnapshot(snapshot => {
        if (snapshot !== null && !snapshot.empty) {
          changeHandler();
        }
      });
  } catch (err) {
    logError('Error listening to firebase gaols', err);
  }
};
