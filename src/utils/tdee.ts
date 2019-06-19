import { PersonalNumbers, ActivityLevel } from './some-types'
import { activityLevelMap } from 'config'

export const getBMR = (data: PersonalNumbers): number => {
  const weightFactor = 9.99
  const heightFactor = 6.25
  const ageFactor = 4.92

  const result = weightFactor * data.weight + heightFactor * data.height - ageFactor * data.age

  return Math.floor(data.sex === 'male' ? result + 5 : result - 161)
}

export const getTDEE = (bmr: number, activityLevel: ActivityLevel): number => {
  return bmr + bmr * activityLevelMap[activityLevel]
}
