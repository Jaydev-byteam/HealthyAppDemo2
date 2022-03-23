export const validCharLength = value => value.length > 7;

export const lowercaseTest = (value) => /[a-z]/.test(value);

export const uppercaseTest = (value) => /[A-Z]/.test(value);

export const specialsTest = (value) =>
  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
