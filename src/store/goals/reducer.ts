import { Reducer } from 'redux'
import { Actions, ActionTypes } from './actions'

export interface GoalsState {
  bmr: number
  currWeight: number
  targetWeight: number
  targetDate: string
}

const initialState: GoalsState = {
  bmr: 0,
  currWeight: 0,
  targetDate: new Date().toISOString(),
  targetWeight: 0
}

export const GoalsReducer: Reducer<GoalsState, Actions> = (
  state = initialState,
  action: Actions
): GoalsState => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      const { value, key } = action.payload
      return {
        ...state,
        [key]: value
      }
    }
    default:
      return state
  }
}
