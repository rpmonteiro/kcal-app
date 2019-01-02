import { SettingsState, SettingsReducer } from './settings/reducer'
import { combineReducers } from 'redux'
import { GoalsState, GoalsReducer } from './goals/reducer'

export interface RootState {
  settings: SettingsState
  goals: GoalsState
}

export const rootReducer = combineReducers<RootState>({
  settings: SettingsReducer,
  goals: GoalsReducer
})
