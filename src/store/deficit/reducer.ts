import { Reducer } from 'redux'
import { Actions, ActionTypes } from './actions'
import { Dictionary, OneNumberPerDay } from 'utils/some-types'
import { week, dayIdx } from 'config'

export interface DeficitState {
  kcal: Dictionary<OneNumberPerDay>
  exercise: Dictionary<OneNumberPerDay>
}

const initialState: DeficitState = {
  kcal: {
    [week]: [0, 0, 0, 0, 0, 0, 0]
  },
  exercise: {
    [week]: [0, 0, 0, 0, 0, 0, 0]
  }
}

export const DeficitReducer: Reducer<DeficitState, Actions> = (
  state = initialState,
  action: Actions
): DeficitState => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      const { value, key } = action.payload
      const newWeekValues = state[key][week].slice()
      newWeekValues[dayIdx] = value

      return {
        ...state,
        [key]: {
          ...state[key][week],
          [week]: newWeekValues
        }
      }
    }
    default:
      return state
  }
}
