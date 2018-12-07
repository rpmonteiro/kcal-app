import { ActionsUnion, createAction } from 'utils/redux-utils'

export enum ActionTypes {
  TOGGLE_UNITS = '[SETTINGS] TOGGLE_UNITS'
}

export const Actions = {
  toggleUnits: () => createAction(ActionTypes.TOGGLE_UNITS)
}

export type Actions = ActionsUnion<typeof Actions>
