import QJS from '../qjs.js'
import { isA001539Num } from '../sequences/A001539'
import { generateA001539Num } from '../sequences/A001539'
import assert from 'assert'

describe('first 20 elements of the sequence starting from 0', () => {
  const actual = QJS.iota(0, 19).map((elem) => generateA001539Num(elem))
  const expected = [
    3, 35, 99, 195, 323, 483, 675, 899, 1155, 1443, 1763, 2115, 2499, 2915,
    3363, 3843, 4355, 4899, 5475, 6083,
  ]
  assert.deepStrictEqual(actual, expected)
})
