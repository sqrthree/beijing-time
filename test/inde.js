const test = require('ava')
const { format } = require('date-fns-tz')

const { beijingDate, beijingDay, beijingToday } = require('../dist')

test('return Beijing date with ISO date', (t) => {
  const date = beijingDate(new Date('2021-08-04T03:01:08.938Z'))

  t.is(date.year, 2021)
  t.is(date.month, 8)
  t.is(date.day, 4)
  t.is(date.hour, 11)
  t.is(date.minute, 1)
  t.is(date.second, 8)
})

test('return Beijing date with Beijing date', (t) => {
  const date = beijingDate(new Date('2018-06-08T10:34:56+08:00'))

  t.is(date.year, 2018)
  t.is(date.month, 6)
  t.is(date.day, 8)
  t.is(date.hour, 10)
  t.is(date.minute, 34)
  t.is(date.second, 56)
})

test('return Beijing date with GMT format', (t) => {
  const date = beijingDate(new Date('Wed Aug 04 2021 11:05:41 GMT+0800'))

  t.is(date.year, 2021)
  t.is(date.month, 8)
  t.is(date.day, 4)
  t.is(date.hour, 11)
  t.is(date.minute, 5)
  t.is(date.second, 41)
})

test('return Beijing date with Tokyo time', (t) => {
  const date = beijingDate(new Date('Wed Aug 04 2021 11:05:41 GMT+0900'))

  t.is(date.year, 2021)
  t.is(date.month, 8)
  t.is(date.day, 4)
  t.is(date.hour, 10)
  t.is(date.minute, 5)
  t.is(date.second, 41)
})

test('return the day of Beijing time', (t) => {
  const day = beijingDay(new Date('2021-08-04T03:01:08.938Z'))

  t.is(day, '2021-08-04')
})

test('return the day of today', (t) => {
  const today = beijingToday()
  const expect = format(new Date(), 'yyyy-MM-dd', {
    timeZone: 'Asia/Shanghai',
  })

  t.is(today, expect)
})
