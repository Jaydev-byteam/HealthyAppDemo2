import {useState} from 'react';

export const useTogglePasswordVisibility = () => {
  // define state for the purposes of the hook
  // visibility boolean will be passed to secureTextEntry prop
  // initializing as true
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  // define an icon state that the hook will adjust
  const [rightIcon, setRightIcon] = useState('eye');

  // function that toggles the password visibility
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
