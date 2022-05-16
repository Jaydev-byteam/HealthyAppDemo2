import {fstore, fire_auth} from './FirebaseDefault';
import {
  stepsGoalObject,
  sleepGoalObject,
  currentDayStepsObject,
  tenDayStepsObject,
  emptyGoalObject,
  emptyStepsGoalObject,
  emptySleepGoalObject,
} from '../_constants/EmptyObjectConstants';
import logError from 'react-native/Libraries/Utilities/logError';
import { Alert } from "react-native";

const addUserToFirestore = (email, nickname) => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .set({email, nickname, id: fire_auth.currentUser.uid}, {merge: true})
    .then(() => {
      console.log('New user added to firestore with email:', email);
    })
    .catch(error => {
      console.log('Error adding new user to firestore:', error);
    });
};

const loginNewUser = (email, password) => {
  fire_auth.signInWithEmailAndPassword(email, password).catch(error => {
    alert(error);
  });
};

const createSleepGoalsCollection = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('sleep')
    .set(emptyGoalObject.sleep)
    .then(() => {
      console.log(
        'Default sleep goals added to firestore for user id:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      console.log('Error adding sleep goals collection to firestore', error);
    });
};

const createStepGoalsCollection = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('steps')
    .set(emptyGoalObject.steps)
    .then(() => {
      console.log(
        'Default steps goals added to firestore for new user:',
        emptyGoalObject.steps,
      );
    })
    .catch(error => {
      console.log('Error adding steps goals collection to firestore', error);
    });
};

const createSleepScoresCollection = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('sleep')
    .set(emptySleepGoalObject.scores)
    .then(() => {
      console.log(
        'Default sleep scores added to firestore for new user:',
        emptySleepGoalObject.scores,
      );
    })
    .catch(error => {
      console.log(
        'Error adding sleep score default collection to firestore',
        error,
      );
    });
};

const createStepsScoresCollection = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('steps')
    .set(emptyStepsGoalObject.scores)
    .then(() => {
      console.log(
        'Default steps scores added to firestore for new user:',
        emptyStepsGoalObject.scores,
      );
    })
    .catch(error => {
      console.log(
        'Error adding steps score default collection to firestore',
        error,
      );
    });
};

const createStepsCollections = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('current_day_steps')
    .doc('starter')
    .set(currentDayStepsObject)
    .then(() => {
      console.log(
        'Current_day_steps collection added to firestore for user:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      console.log(
        'Error adding a current_day_steps collection to firestore',
        error,
      );
    });
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('ten_day_steps')
    .doc('starter')
    .set(tenDayStepsObject)
    .then(() => {
      console.log(
        'Current_day_steps collection added to firestore for user:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      console.log(
        'Error adding a current_day_steps collection to firestore',
        error,
      );
    });
};

export const createNewUser = async (email, password, nickname) => {
  try {
    await fire_auth.createUserWithEmailAndPassword(email, password);
    // await loginNewUser(email, password);
    await addUserToFirestore(email, nickname);
    await createStepGoalsCollection();
    await createSleepGoalsCollection();
    await createStepsScoresCollection();
    await createSleepScoresCollection();
    await createStepsCollections();
  } catch (error) {
    const {code, message, stack} = error;
    if (code === 'auth/weak-password') {
      Alert.alert('The password is too weak.');
    }
    if (code === 'auth/invalid-email') {
      Alert.alert('The email address is incorrectly formatted.');
    } else if (code === 'auth/email-already-in-use') {
      Alert.alert('The email is already in use.');
    } else {
      logError('Error in registerUser', stack);
    }
    console.log(`error code: ${code}\n message: ${message}\n stack: ${stack}`);
  }
};
