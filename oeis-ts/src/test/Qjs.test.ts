import QJS from '../Qjs'

describe('QJS module tests', () => {
  test('iota() returns the array of integers which starts from min and ends with max when min and max values are given, ', () => {
    expect(QJS.iota(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
  })
  test('divOf() returns the array of divisors of the given number', () => {
    expect(QJS.divOf(6)).toEqual([1, 2, 3, 6])
  })
  test('factorization() returns the object of prime factors of the given number', () => {
    expect(QJS.primeFactor(2)).toEqual({ 2: 1 })
    expect(QJS.primeFactor(12)).toEqual({ 2: 2, 3: 1 })
    expect(QJS.primeFactor(30)).toEqual({ 2: 1, 3: 1, 5: 1 })
  })
})
