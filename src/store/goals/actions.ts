import { ActionsUnion, createAction } from 'utils/redux-utils'
import { GoalsState } from './reducer'

export enum ActionTypes {
  SET_GOAL = '[GOALS] SET_GOAL'
}

export const Actions = {
  setGoal: (idx: number, value: number, key: keyof GoalsState) =>
    createAction(ActionTypes.SET_GOAL, { idx, value, key })
}

export type Actions = ActionsUnion<typeof Actions>
