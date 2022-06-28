import {fstore, fire_auth} from '../database/FirebaseDefault';
import {log} from '../_utilities/UtilityFunctions';

export let hapiID = '';
export let accessToken = '';
export let refreshToken = '';

export function getHapiTokens() {
  const unsubscribe = fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('human_api')
    .doc('human_api')
    .onSnapshot(
      doc => {
        if (doc.exists) {
          hapiID = doc.data().userid;
          accessToken = doc.data().token;
          refreshToken = doc.data().refresh;
        }
      },
      error => {
        log(`error getting data: ${error}`);
      },
    );
  return () => unsubscribe();
}

export const hapiAuthRecord = (accessTkn, refreshTkn, userID) => {
  fire_auth.onAuthStateChanged(user => {
    if (user) {
      fstore
        .collection('users')
        .doc(fire_auth.currentUser.uid)
        .collection('human_api')
        .doc('human_api')
        .set(
          {
            token: accessTkn,
            userid: userID,
            refresh: refreshTkn,
          },
          {merge: true},
        )
        .catch(error => {
          log(error.stack);
        });
    }
  });
};

export const hapiActivities = (res, time) => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('hapi_activities')
    .add({
      timestamp: time,
      human_api: res,
    })
    .catch(error => {
      log(error.stack);
    });
};

export const hapiSteps = (res, time) => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('hapi_steps')
    .add({
      timestamp: time,
      fitbit: res,
    })
    .catch(error => {
      log(error.stack);
    });
};

export const hapiSleep = (res, time) => {
  fstore
    .collection('users')
    .doc(fire_auth.currentUser.uid)
    .collection('hapi_sleep')
    .add({
      timestamp: time,
      fitbit: res,
    })
    .catch(error => {
      log(error.stack);
    });
};
