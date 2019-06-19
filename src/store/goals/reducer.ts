import { Reducer } from 'redux'
import { Actions, ActionTypes } from './actions'
import { PersonalNumbers, ActivityLevel } from 'utils/some-types'
import { getBMR, getTDEE } from 'utils/tdee'

export interface GoalsState extends PersonalNumbers {
  bmr: number
  tdee: number
  activityLevel: ActivityLevel
}

const defaultBodyStats: PersonalNumbers = {
  weight: 70,
  height: 180,
  gender: 'male',
  age: 25
}

const initialState: GoalsState = {
  bmr: getBMR(defaultBodyStats),
  tdee: getTDEE(getBMR(defaultBodyStats), ActivityLevel.moderate),
  activityLevel: ActivityLevel.moderate,
  ...defaultBodyStats
}

export const GoalsReducer: Reducer<GoalsState, Actions> = (
  state = initialState,
  action: Actions
): GoalsState => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      const { value, key } = action.payload
      const newState = {
        ...state,
        [key]: value
      }
      const bmr = getBMR(newState)
      const tdee = getTDEE(bmr, newState.activityLevel)

      return {
        ...newState,
        bmr,
        tdee
      }
    }
    default:
      return state
  }
}
