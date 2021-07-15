import QJS from '../Qjs'
import assert from 'assert'

describe('QJS module tests', () => {
  it('iota() returns the array of integers which starts from min and ends with max when min and max values are given, ', () => {
    assert.deepStrictEqual(QJS.iota(0, 5), [0, 1, 2, 3, 4, 5])
  })
  it('divOf() returns the array of divisors of the given argument', () => {
    assert.deepStrictEqual(QJS.divOf(6), [1, 2, 3, 6])
  })
})
