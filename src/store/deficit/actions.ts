import { ActionsUnion, createAction } from 'utils/redux-utils'
import { DeficitState } from './reducer'

export enum ActionTypes {
  UPDATE = '[DEFICIT] UPDATE'
}

export const Actions = {
  updateDeficit: (key: keyof DeficitState, value: number) =>
    createAction(ActionTypes.UPDATE, { key, value })
}

export type Actions = ActionsUnion<typeof Actions>
