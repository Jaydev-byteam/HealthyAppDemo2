export const lowercaseTest = value => {
  let testRegex = /[a-z]/;
  return testRegex.test(value);
};

export const uppercaseTest = value => {
  let testRegex = /[A-Z]/;
  return testRegex.test(value);
};

export const specialsTest = value => {
  let testRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return testRegex.test(value);
};
