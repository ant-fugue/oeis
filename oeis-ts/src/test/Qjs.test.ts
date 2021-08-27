import QJS from '../Qjs'

describe('QJS module tests', () => {
  test('iota() returns the array of integers which starts from min and ends with max when min and max values are given, ', () => {
    expect(QJS.iota(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
  })
  test('divOf() returns the array of divisors of the given number', () => {
    expect(QJS.divOf(6)).toEqual([1, 2, 3, 6])
  })
  test('divSum() returns the sum of all divisors', () => {
    expect(QJS.divSum(1)).toBe(1)
    expect(QJS.divSum(4)).toBe(7)
    expect(QJS.divSum(6)).toBe(12)
  })
  test('factorization() returns the object of prime factors of the given number', () => {
    expect(QJS.primeFactor(2)).toEqual({ 2: 1 })
    expect(QJS.primeFactor(12)).toEqual({ 2: 2, 3: 1 })
    expect(QJS.primeFactor(30)).toEqual({ 2: 1, 3: 1, 5: 1 })
  })
  test('getQuotient() returns the quotient from the given number and its divisor', () => {
    expect(QJS.getQuotient(10, 2)).toBe(5)
    expect(QJS.getQuotient(10, 3)).toBe(3)
    expect(QJS.getQuotient(10, 11)).toBe(0)
  })
  test('getIntArrayFromInt() returns the array which contains integers which are decompose to digits from original integer', () => {
    expect(QJS.getIntArrayFromInt(1)).toEqual([1])
    expect(QJS.getIntArrayFromInt(23)).toEqual([2, 3])
  })
})
