import QJS from '../Qjs'
import assert from 'assert'

describe('QJS module tests', () => {
  test('iota() returns the array of integers which starts from min and ends with max when min and max values are given, ', () => {
    assert.deepStrictEqual(QJS.iota(0, 5), [0, 1, 2, 3, 4, 5])
  })
  test('divOf() returns the array of divisors of the given number', () => {
    assert.deepStrictEqual(QJS.divOf(6), [1, 2, 3, 6])
  })
  test('factorization() returns the object of prime factors of the given number', () => {
    assert.deepStrictEqual(QJS.primeFactor(2), { 2: 1 })
    assert.deepStrictEqual(QJS.primeFactor(12), { 2: 2, 3: 1 })
    assert.deepStrictEqual(QJS.primeFactor(30), { 2: 1, 3: 1, 5: 1 })
  })
})
