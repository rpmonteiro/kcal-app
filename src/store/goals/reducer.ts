import { Reducer } from 'redux'
import { Actions, ActionTypes } from './actions'
import weekIdentifier from 'week-identifier'
import { Dictionary } from 'utils/some-types'

const week: string = weekIdentifier()
export type OneNumberPerWeekday = [number, number, number, number, number, number, number]
export type GoalObj = Dictionary<OneNumberPerWeekday>

export interface GoalsState {
  exercise: GoalObj
  kcal: GoalObj
}

const initialState: GoalsState = {
  exercise: {
    [week]: [0, 0, 0, 0, 0, 0, 0]
  },
  kcal: {
    [week]: [0, 0, 0, 0, 0, 0, 0]
  }
}

export const GoalsReducer: Reducer<GoalsState, Actions> = (
  state = initialState,
  action: Actions
): GoalsState => {
  switch (action.type) {
    case ActionTypes.SET_GOAL: {
      const { idx, value, key } = action.payload
      const goal = [...state[key][week]]
      goal[idx] = value
      return {
        ...state,
        exercise: {
          2444: [0, 1, 1, 1, 1, 1, 1]
        }
      }
    }
    default:
      return state
  }
}
