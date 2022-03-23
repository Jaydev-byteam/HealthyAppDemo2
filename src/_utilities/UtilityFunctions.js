

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
  let hours = bedtimeDate.getHours();
  let minutes = bedtimeDate.getMinutes();
  let minText = '';
  let ampm = 'PM';
  if (hours < 12) {
    ampm = 'AM';
  } else {
    hours -= 12;
  }
  // minutes string needs to be in a 2-digit format
  if (minutes < 10) {
    minText = '0' + minutes.toString();
  } else {
    minText = minutes.toString();
  }
  return hours.toString() + ':' + minText + ' ' + ampm;
};