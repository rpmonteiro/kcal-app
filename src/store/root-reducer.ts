import { SettingsState, SettingsReducer } from './settings/reducer'
import { combineReducers } from 'redux'

export interface RootState {
  settings: SettingsState
}

export const rootReducer = combineReducers<RootState>({
  settings: SettingsReducer
})
