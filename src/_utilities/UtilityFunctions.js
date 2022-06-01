// helper function to convert minutes to H:MM format
export const minutesToHours = minutes => {
  // define two text variables to be concatenated into a time string
  let hours,
    minText = '';
  // calculate hours portion and convert to string
  hours = Math.floor(minutes / 60).toString();
  // calculate minutes portion
  let min = minutes % 60;
  // minutes string needs to be in a 2-digit format
  if (min < 10) {
    minText = '0' + min.toString();
  } else {
    minText = min.toString();
  }
  // return concatenation of hours and min portions separated by a colon
  return hours + ':' + minText;
};

// helper function to convert bedtime date object to HH:MM AM/PM string
export const bedtimeString = bedtimeDate => {
  // define hours and minutes
  log('In bedtimeString, date inputted to the function is:', bedtimeDate);
  let hours = bedtimeDate.getHours();
  let minutes = bedtimeDate.getMinutes();
  let minText = '';
  let hoursText = '';
  let ampm = 'PM';
  // convert hours value to the appropriate string to display
  if (hours === 0) {
    ampm = 'AM';
    hoursText = '12';
  } else if (hours < 12) {
    ampm = 'AM';
    hoursText = hours.toString();
  } else if (hours === 12) {
    ampm = 'PM';
    hoursText = '12';
  } else {
    hours -= 12;
    hoursText = hours.toString();
  }

  // minutes string needs to be in a 2-digit format
  if (minutes < 10) {
    minText = '0' + minutes.toString();
  } else {
    minText = minutes.toString();
  }
  return hoursText + ':' + minText + ' ' + ampm;
};

// helper function to convert bedtime string into a date object usable by the RNDatePicker

export const timeStringToDate = timeString => {
  // break the string into the components of hours, minutes, and AM/PM string
  let timeArray = timeString.split(' ');
  let hoursMinutes = timeArray[0].split(':');
  let hours = parseInt(hoursMinutes[0]);
  let minutes = parseInt(hoursMinutes[1]);
  let newDate = new Date();
  if (timeArray[1] === 'AM' && hours === 12) {
    hours = 0;
  }
  if (timeArray[1] === 'PM' && hours > 12) {
    hours += 12;
  }
  newDate.setHours(hours, minutes);
  return newDate;
};

export const log = message => {
  if (__DEV__) {
    console.log(message);
  }
};

export const logError = (message, error) => {
  if (__DEV__) {
    console.log(message, JSON.stringify(error, null, 2));
  }
};
