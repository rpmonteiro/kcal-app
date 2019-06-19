export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type OneNumberPerDay = [number, number, number, number, number, number, number]

export interface Dictionary<T> {
  [key: string]: T
}

export type Gender = 'male' | 'female'

export interface PersonalNumbers {
  weight: number
  height: number
  age: number
  gender: Gender
}

export enum ActivityLevel {
  light = 'LIGHT',
  moderate = 'MODERATE',
  high = 'HIGH'
}
