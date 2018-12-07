import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/root-reducer'
import { ActionCreatorsMapObject, AnyAction, Action as ReduxAction } from 'redux'

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export interface Dispatch {
  // tslint:disable-next-line:callable-types
  <R, E>(
    asyncAction: ThunkAction<ReduxAction | Promise<ReduxAction | void>, RootState, {}, AnyAction>
  ): R
}

export interface Dispatch<A extends ReduxAction = AnyAction> {
  // tslint:disable-next-line:callable-types
  <T extends A>(action: T): T
}

// function overloads
export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload }
}

export type ActionsUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>

export type Thunk = ThunkAction<ReduxAction | Promise<ReduxAction | void>, RootState, {}, AnyAction>
