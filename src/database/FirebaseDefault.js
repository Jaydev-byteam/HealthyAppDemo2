// import crashlytics from '@react-native-firebase/crashlytics';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import functions from '@react-native-firebase/functions';
// import { firebase } from '@react-native-firebase/storage';

/**
 * Firebase default entry point
 * */

// export const fire_crash = crashlytics();
export const fstore = firestore();
// export const cloud_functions = functions();
export const fire_auth = auth();
// export const firebase_storage = firebase;
