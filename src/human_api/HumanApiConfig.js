import {hapiID, refreshToken} from '../actions/HumanApiActions';
import {hapiActivities, hapiSteps, hapiSleep} from '../actions/HumanApiActions';

import {fstore, fire_auth} from '../database/FirebaseDefault';

const hapiAuthUrl = 'https://auth.humanapi.co/v1/connect/token';

const hapiClientId = 'BetterYouClientID';
const hapiClientSecret = 'BetterYouClientSecret';

const userSessionRequestBody = {
  client_id: hapiClientId,
  client_user_id: fire_auth.currentUser.uid,
  client_user_email: fire_auth.currentUser.email,
  client_secret: hapiClientSecret,
  type: 'session',
};


