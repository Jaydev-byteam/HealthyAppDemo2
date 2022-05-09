/**
 * ASYNC STORAGE
 */

export const saveToAsyncStorage = async (keyword, value) => {
  try {
    await AsyncStorage.setItem(keyword, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const retrieveFromAsyncStorage = async (keyword) => {
  try {
    return await AsyncStorage.getItem(keyword);
  } catch (e) {
    console.log(e);
    return '[]';
  }
};
