import { SettingsState, SettingsReducer } from './settings/reducer'
import { combineReducers } from 'redux'
import { GoalsState, GoalsReducer } from './goals/reducer'
import { DeficitState, DeficitReducer } from './deficit/reducer'

export interface RootState {
  deficit: DeficitState
  settings: SettingsState
  goals: GoalsState
}

export const rootReducer = combineReducers<RootState>({
  deficit: DeficitReducer,
  settings: SettingsReducer,
  goals: GoalsReducer
})
