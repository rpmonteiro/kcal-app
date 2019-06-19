import { createSelector } from 'reselect'
import { RootState } from './root-reducer'
import { kiloOfFat, dayIdx, week } from 'config'
import { getDaysDiff } from 'utils/date-utils'

const bmrSelector = (state: RootState) => state.goals.bmr
const currWeightSelector = (state: RootState) => state.goals.currWeight
const targetDateSelector = (state: RootState) => state.goals.targetDate
const targetWeightselector = (state: RootState) => state.goals.targetWeight
const initialWeightSelector = (state: RootState) => state.goals.initialWeight
const todayKcalSelector = (state: RootState) => state.deficit.kcal[week][dayIdx]
const todayExerciseSelector = (state: RootState) => state.deficit.exercise[week][dayIdx]

export const getTargetDeficit = createSelector(
  currWeightSelector,
  targetDateSelector,
  targetWeightselector,
  (currWeight, targetDate, targetWeight): string => {
    const totalDays = getDaysDiff(targetDate)
    const weightDiff = currWeight - targetWeight
    const weightDiffAbs = Math.abs(weightDiff)
    const dailyDeficitTarget = parseInt(((weightDiffAbs * kiloOfFat) / totalDays).toFixed(0)) || ''
    return dailyDeficitTarget ? dailyDeficitTarget.toString() : ''
  }
)

export const getTodayDeficit = createSelector(
  bmrSelector,
  todayKcalSelector,
  todayExerciseSelector,
  (bmr, todayKcal, todayExercise) => (bmr - todayKcal + todayExercise).toString()
)

export const getDaysLeft = createSelector(
  targetDateSelector,
  (targetDate) => getDaysDiff(targetDate)
)

export const getWeightLost = createSelector(
  initialWeightSelector,
  currWeightSelector,
  (initialWeight, currWeight): string => `${initialWeight - currWeight} kg`
)
