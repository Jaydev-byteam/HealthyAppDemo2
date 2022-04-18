import {fstore, fire_auth} from './FirebaseDefault';
import {
  stepsGoalObject,
  sleepGoalObject,
  currentDayStepsObject,
  tenDayStepsObject,
} from '../_constants/EmptyObjectConstants';

const addUserToFirestore = data => {
  fstore
    .collection('users')
    .doc(data.id)
    .set(data)
    .then(() => {
      console.log('New user added to firestore with email:', data.email);
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

const createSleepGoalsCollection = id => {
  fstore
    .collection('users')
    .doc(id)
    .collection('goals')
    .doc('sleep')
    .set(sleepGoalObject.goals)
    .then(() => {
      console.log('Default sleep goals added to firestore for user id:', id);
    })
    .catch(error => {
      console.log('Error adding sleep goals collection to firestore', error);
    });
};

const createStepGoalsCollection = id => {
  fstore
    .collection('users')
    .doc(id)
    .collection('goals')
    .doc('steps')
    .set(stepsGoalObject.goals)
    .then(() => {
      console.log('Default steps goals added to firestore for user id:', id);
    })
    .catch(error => {
      console.log('Error adding steps goals collection to firestore', error);
    });
};

const createSleepScoresCollection = id => {
  fstore
    .collection('users')
    .doc(id)
    .collection('scores')
    .doc('sleep')
    .set(sleepGoalObject.scores)
    .then(() => {
      console.log('Default sleep scores added to firestore for user id:', id);
    })
    .catch(error => {
      console.log(
        'Error adding sleep score default collection to firestore',
        error,
      );
    });
};

const createStepsScoresCollection = id => {
  fstore
    .collection('users')
    .doc(id)
    .collection('scores')
    .doc('steps')
    .set(stepsGoalObject.scores)
    .then(() => {
      console.log('Default steps scores added to firestore for user id:', id);
    })
    .catch(error => {
      console.log(
        'Error adding steps score default collection to firestore',
        error,
      );
    });
};

const createStepsCollections = id => {
  fstore
    .collection('users')
    .doc(id)
    .collection('current_day_steps')
    .doc('starter')
    .set(currentDayStepsObject)
    .then(() => {
      console.log(
        'Current_day_steps collection added to firestore for user:',
        id,
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
    .doc(id)
    .collection('ten_day_steps')
    .doc('starter')
    .set(tenDayStepsObject)
    .then(() => {
      console.log(
        'Current_day_steps collection added to firestore for user:',
        id,
      );
    })
    .catch(error => {
      console.log(
        'Error adding a current_day_steps collection to firestore',
        error,
      );
    });
};

export const createNewUser = (email, password, nickname) => {
  fire_auth
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const data = {
        id: response.user.uid,
        email,
        nickname,
      };
      addUserToFirestore(data);
      createStepGoalsCollection(data.id);
      createSleepGoalsCollection(data.id);
      createStepsScoresCollection(data.id);
      createSleepScoresCollection(data.id);
      createStepsCollections(data.id);
      loginNewUser(email, password);
    })
    .catch(error => {
      console.log('In createNewUser error in creation:', error);
    });
};
