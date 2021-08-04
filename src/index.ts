const padZero = function padZero(value: number): string {
  return `${value < 9 ? '0' : ''}${value}`
}

interface BeijingDate {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  millisecond: number
  weekday: number
}

export function beijingDate(date: Date): BeijingDate {
  const offset = date.getTimezoneOffset()

  if (offset !== -480) {
    const diff = -480 - offset

    date.setMinutes(date.getMinutes() - diff)
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekday = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const millisecond = date.getMilliseconds()

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond,
    weekday,
  }
}

export function beijingDay(date: Date): string {
  const { year, month, day } = beijingDate(date)

  const dateString = `${year}-${padZero(month)}-${padZero(day)}`

  return dateString
}

export function beijingToday(): string {
  return beijingDay(new Date())
}
