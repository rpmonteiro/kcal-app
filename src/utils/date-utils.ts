const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

import dayjs from 'dayjs'

export const formatDate = (ISODate: string): string => {
  const dateObj = dayjs(ISODate)
  return getOrdinalDay(dateObj.date()) + ' ' + getMonthName(dateObj.month()) + ' ' + dateObj.year()
}

export const getDaysDiff = (ISODate: string): number => {
  const today = dayjs()
  const futureDate = dayjs(ISODate)
  return futureDate.diff(today, 'day')
}

const getMonthName = (idx: number): string => months[idx]

export const getOrdinalDay = (n: number): string => {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
}
