import { Reducer } from 'redux'
import { Actions, ActionTypes } from './actions'

export interface SettingsState {
  metricUnits: boolean
  bmr: number
}

export const initialState: SettingsState = {
  metricUnits: true,
  bmr: 0
}

export const SettingsReducer: Reducer<SettingsState> = (
  state = initialState,
  action: Actions
): SettingsState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_UNITS:
      return {
        ...state,
        metricUnits: !state.metricUnits
      }
    default:
      return state
  }
}
