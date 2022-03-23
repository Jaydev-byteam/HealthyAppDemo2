import {fstore, fire_auth} from './FirebaseDefault';
import {EmptyStepsGoalObject} from '../_constants/EmptyObjectConstants';

export const getStepsGoal = setStepsGoal => {
  let userID = fire_auth.currentUser.uid;
  const stepGoalDoc = fstore
    .collection('users')
    .doc(userID)
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
  let userID = fire_auth.currentUser.uid;
  const stepScoreDoc = fstore
    .collection('users')
    .doc(userID)
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
