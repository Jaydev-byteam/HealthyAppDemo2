import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {log, logError} from './UtilityFunctions';

export const askLocation = () => {
  request(PERMISSIONS.IOS.LOCATION_ALWAYS)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      logError(error);
    });
};
