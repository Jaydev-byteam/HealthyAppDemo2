import {hapiAuthRecord, hapiID, refreshToken} from '../actions/HumanApiActions';
import {hapiActivities, hapiSteps, hapiSleep} from '../actions/HumanApiActions';
import dayjs from 'dayjs';

import {fstore, fire_auth} from '../database/FirebaseDefault';

const hapiAuthUrl = 'https://auth.humanapi.co/v1/connect/token';

const hapiClientId = 'BetterYouClientID';
const hapiClientSecret = 'BetterYouClientSecret';

const userSessionRequestBody = {
  client_id: hapiClientId,
  client_user_id: fire_auth.currentUser.uid,
  client_user_email: fire_auth.currentUser.email,
  client_secret: hapiClientSecret,
};

const getUserSessionToken = () => {
  userSessionRequestBody.type = 'session';
  console.log(userSessionRequestBody);
  fetch(hapiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userSessionRequestBody),
  })
    .then(response => response.json())
    .then(sessionTokenData => {
      console.log(sessionTokenData);
      hapiAuthRecord(sessionTokenData.session_token, sessionTokenData.human_id);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const getUserIdToken = () => {
  userSessionRequestBody.type = 'id';
  console.log(userSessionRequestBody);
  fetch(hapiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userSessionRequestBody),
  })
    .then(response => response.json())
    .then(idTokenData => {
      console.log(idTokenData);
      hapiAuthRecord(idTokenData.id_token);
    });
};

const accessTokenRequestBody = {
  client_id: hapiClientId,
  client_user_id: fire_auth.currentUser.uid,
  client_user_email: fire_auth.currentUser.email,
  client_secret: hapiClientSecret,
};

export const fetchHumanApiData = accessToken => {
  const today = dayjs().format();
  let headers = {
    Authorization: 'Bearer ' + accessToken,
    Accept: 'application/json',
  };
  let url = 'https://api.humanapi.co/v1/human/activities/summaries';
  fetch(url, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      hapiActivities(data, today);
    });
};
