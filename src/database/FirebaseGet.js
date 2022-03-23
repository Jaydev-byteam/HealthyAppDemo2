import {fstore, fire_auth} from './FirebaseDefault';
import {EmptyStepsGoalObject} from '../_constants/EmptyObjectConstants';

export const getStepsGoal = setStepsGoal => {
  const stepGoalDoc = fstore
    .collection(`users/${fire_auth.currentUser.uid}/goals`)
    .doc('steps');
  // let stepsObj = {dailyStepGoal: 0};
  stepGoalDoc.onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      setStepsGoal(docSnapshot.data().dailyStepGoal);
    }
    err => {
      console.log('Error in getting steps goal from Firestore database:', err);
    };
  });
};

export const getStepsScores = setStepScores => {
  const stepScoreDoc = fstore
    .collection(`users/${fire_auth.currentUser.uid}/scores`)
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
