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

const getUserSessionToken = async () => {
  userSessionRequestBody.type = 'session';
  console.log(userSessionRequestBody);
  const response = await fetch(hapiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userSessionRequestBody),
  });
  const sessionTokenData = response.json();
  await hapiAuthRecord(
    sessionTokenData.session_token,
    sessionTokenData.human_id,
  );
};

const getUserIdToken = async () => {
  userSessionRequestBody.type = 'id';
  console.log(userSessionRequestBody);
  const response = await fetch(hapiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userSessionRequestBody),
  });
  const idTokenData = response.json();
  await hapiAuthRecord(idTokenData.id_token);
};

const accessTokenRequestBody = {
  client_id: hapiClientId,
  client_user_id: fire_auth.currentUser.uid,
  client_user_email: fire_auth.currentUser.email,
  client_secret: hapiClientSecret,
};

export const fetchHumanApiData = async accessToken => {
  const today = dayjs().format();
  let headers = {
    Authorization: 'Bearer ' + accessToken,
    Accept: 'application/json',
  };
  let url = 'https://api.humanapi.co/v1/human/activities/summaries';
  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  const data = response.json();
  console.log('Data fetched from humanAPI is:', data);
  await hapiActivities(data, today);
};
