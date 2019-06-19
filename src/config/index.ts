import weekIdentifier from 'week-identifier'
import dayjs from 'dayjs'
import { ActivityLevel } from 'utils/some-types'

export const dayIdx = dayjs().day()
export const week = weekIdentifier()
export const kiloOfFat = 7700
export const dateFormat = 'DD-MM-YYYY'

export const activityLevelMap = {
  [ActivityLevel.light]: 0.1,
  [ActivityLevel.moderate]: 0.2,
  [ActivityLevel.high]: 0.3
}
