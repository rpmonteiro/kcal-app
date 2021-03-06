import { ActionsUnion, createAction } from 'utils/redux-utils'
import { GoalsState } from './reducer'

export enum ActionTypes {
  UPDATE = '[GOALS] UPDATE'
}

export const Actions = {
  updateGoal: (key: keyof GoalsState, value: number | string) =>
    createAction(ActionTypes.UPDATE, { key, value })
}

export type Actions = ActionsUnion<typeof Actions>
