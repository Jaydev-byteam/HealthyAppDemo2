export const EmptyStepsGoalObject = {
  average_steps: 0,
  score: 0,
  days_of_the_week: [false, false, false, false, false, false, false],
};

export const EmptySleepGoalObject = {
  sleep_bedtime: "10:00 PM",
  sleep_duration: 480,
};

export const emptyGoalObject = {
  steps: {
    dailyStepGoal: 0,
  },
  sleep: {
    sleep_duration: 480,
    sleep_bedtime: '10:00 PM',
  },
};

export const stepsGoalObject = {
  goals: {dailyStepGoal: 0},
  scores: {
    average_steps: 0,
    score: 0,
    daily_steps: 0,
    ten_day_steps: 0,
    days_of_the_week: [false, false, false, false, false, false, false],
  },
};

export const userObject = {
  email: '',
  id: '',
  nickname: 'Healthy App User',
};

export const sleepGoalObject = {
  goals: {
    sleep_bedtime: '10:00 PM',
    sleep_duration: 480,
  },
  scores: {
    average_sleep: 0,
    score: 0,
    days_of_the_week: [false, false, false, false, false, false, false],
  },
};

export const currentDayStepsObject = {
  data: 0,
  iso: "2022-01-01T00:00+0000",
  unix: 1640995200,
};

export const tenDayStepsObject = {
  data: [],
  iso: "2022-01-01T00:00+0000",
  unix: 1640995200,
}
