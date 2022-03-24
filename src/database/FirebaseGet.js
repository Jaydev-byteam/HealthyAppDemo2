import {fstore, fire_auth} from './FirebaseDefault';
import {EmptyStepsGoalObject} from '../_constants/EmptyObjectConstants';
import logError from 'react-native/Libraries/Utilities/logError';

export const getStepsGoal = setStepsGoal => {
  const stepGoalDoc = fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('goals')
    .doc('steps');
  stepGoalDoc.onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      console.log('in getStepsGoal, doc data is:', docSnapshot.data());
      setStepsGoal(docSnapshot.data().dailyStepGoal);
    }
    err => {
      console.log('Error in getting steps goal from Firestore database:', err);
    };
  });
};

export const getStepsScores = setStepScores => {
  const stepScoreDoc = fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('scores')
    .doc('steps');
  let stepScoreObj = EmptyStepsGoalObject;
  stepScoreDoc.onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      stepScoreObj = docSnapshot.data();
      setStepScores(stepScoreObj);
    }
    err => {
      console.log(
        'Error in getting steps scores from Firestore database:',
        err,
      );
    };
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
