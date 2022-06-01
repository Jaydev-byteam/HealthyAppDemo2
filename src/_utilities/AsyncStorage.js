import AsyncStorage from '@react-native-async-storage/async-storage';
import {logError} from './UtilityFunctions';

/**
 * ASYNC STORAGE
 */

export const ONBOARDING_COMPLETE_KEY = 'onboarding-complete-key';

export const saveToAsyncStorage = async (keyword, value) => {
  try {
    await AsyncStorage.setItem(keyword, JSON.stringify(value));
  } catch (e) {
    logError(e);
  }
};

export const retrieveFromAsyncStorage = async keyword => {
  try {
    return await AsyncStorage.getItem(keyword);
  } catch (e) {
    logError(e);
    return '[]';
  }
};
