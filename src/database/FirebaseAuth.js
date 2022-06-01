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
import {log, logError} from '../_utilities/UtilityFunctions';
import {Alert} from 'react-native';

const addUserToFirestore = (email, nickname) => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .set({email, nickname, id: fire_auth.currentUser.uid}, {merge: true})
    .then(() => {
      log('New user added to firestore with email:', email);
    })
    .catch(error => {
      logError('Error adding new user to firestore:', error);
    });
};

export const checkForDelete = async () => {
  log('In checkForDelete');
  const deleteUser = await fstore
    .collection('account_to_delete')
    .doc(fire_auth.currentUser.uid)
    .get();
  log('deleteUser object is:', deleteUser);
  if (deleteUser.exists) {
    await fstore
      .collection('account_to_delete')
      .doc(fire_auth.currentUser.uid)
      .delete();
  }
};

export const loginNewUser = async (email, password) => {
  log('Login fired with email and password', email, password);
  if (email === '' || null) {
    Alert.alert(
      'Missing email/password',
      'Please enter your email and password.',
    );
  } else if (password === '' || null) {
    Alert.alert(
      'Missing email/password',
      'Please enter your email and password.',
    );
  } else {
    try {
      return await fire_auth.signInWithEmailAndPassword(email.trim(), password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorStack = error.stack;
      if (errorCode === 'auth/wrong-password') {
        Alert.alert('Invalid password. Please try again.');
      } else if (errorCode === 'auth/invalid-email') {
        Alert.alert('Invalid email. Please try again.');
      } else if (errorCode === 'auth/user-not-found') {
        Alert.alert('An account with that email does not exist.');
      } else if (errorCode === 'auth/too-many-requests') {
        Alert.alert(
          'Access to this account has been temporarily disabled due to many failed login attempts.',
        );
      }
      log(
        `error code: ${errorCode}\n message: ${errorMessage}\n stack: ${errorStack}`,
      );
    }
  }
};

const createSleepGoalsCollection = () => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('sleep')
    .set(emptyGoalObject.sleep)
    .then(() => {
      log(
        'Default sleep goals added to firestore for user id:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      logError('Error adding sleep goals collection to firestore', error);
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
      log(
        'Default steps goals added to firestore for new user:',
        emptyGoalObject.steps,
      );
    })
    .catch(error => {
      logError('Error adding steps goals collection to firestore', error);
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
      log(
        'Default sleep scores added to firestore for new user:',
        emptySleepGoalObject.scores,
      );
    })
    .catch(error => {
      logError(
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
      log(
        'Default steps scores added to firestore for new user:',
        emptyStepsGoalObject.scores,
      );
    })
    .catch(error => {
      logError(
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
      log(
        'Current_day_steps collection added to firestore for user:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      logError(
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
      log(
        'Current_day_steps collection added to firestore for user:',
        fire_auth.currentUser.uid,
      );
    })
    .catch(error => {
      logError(
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
