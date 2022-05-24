export const EmptyStepsGoalObject = {
  average_steps: 0,
  score: 0,
  days_of_the_week: [false, false, false, false, false, false, false],
};

export const EmptySleepGoalObject = {
  sleep_bedtime: '10:00 PM',
  sleep_duration: 480,
};

export const emptyGoalObject = {
  steps: {
    dailyStepGoal: 5000,
  },
  sleep: {
    sleep_duration: 480,
    sleep_bedtime: '10:00 PM',
  },
};

export const stepsGoalObject = {
  id: 'steps',
  goals: {dailyStepGoal: 2000},
  scores: {
    average_steps: 0,
    score: 0,
    daily_steps: 0,
    ten_day_steps: 0,
  },
};

export const userObject = {
  email: '',
  id: '',
  nickname: 'Healthy App User',
};

export const sleepGoalObject = {
  id: 'sleep',
  goals: {
    sleep_bedtime: '10:00 PM',
    sleep_duration: 480,
  },
  scores: {
    average_sleep: 0,
    score: 0,
  },
};

export const goalList = [stepsGoalObject, sleepGoalObject];

export const currentDayStepsObject = {
  data: 0,
  iso: '2022-01-01T00:00+0000',
  unix: 1640995200,
};

export const tenDayStepsObject = {
  data: ['2022-01-01T00:00+0000 = 0.0'],
  iso: '2022-01-01T00:00+0000',
  unix: 1640995200,
};

export const emptySleepGoalObject = {
  id: 'sleep',
  goals: {
    sleep_bedtime: '10:00 PM',
    sleep_duration: 480,
  },
  scores: {
    average_sleep: 480,
    score: 100,
    days_of_the_week: [true, true, true, true, true, true, true],
  },
};

export const emptyStepsGoalObject = {
  id: 'steps',
  goals: {dailyStepGoal: 2000},
  scores: {
    average_steps: 0,
    score: 0,
    daily_steps: 0,
    ten_day_steps: 0,
    days_of_the_week: [false, false, false, false, false, false, false],
  },
};

export const emptyGoalList = [emptyStepsGoalObject, emptySleepGoalObject];
