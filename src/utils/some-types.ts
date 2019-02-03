export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type OneNumberPerDay = [number, number, number, number, number, number, number]

export interface Dictionary<T> {
  [key: string]: T
}
