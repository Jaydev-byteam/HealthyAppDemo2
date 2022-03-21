import {fstore, fire_auth} from '../database/FirebaseDefault';

export const getStepsGoal = setStepsGoal => {
  const stepDoc = fstore
    .collection(`users/${fire_auth.currentUser.uid}/goals`)
    .doc('steps');
  let stepsObj = {dailyStepGoal: 0};
  stepDoc.onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      stepsObj = docSnapshot.data();
      console.log('In getStepsGoal, stepsObj is', stepsObj.dailyStepGoal);
    }
  });
  setStepsGoal(stepsObj.dailyStepGoal);
};
