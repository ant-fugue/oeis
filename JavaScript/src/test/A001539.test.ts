import { TestScheduler } from 'jest'
import QJS from '../qjs.js'
import A001539 from '../../JavaScript/sequences/A001539'
const qjs = new QJS()

test('first 20 elements of the sequence starting from 0', () => {
  expect(qjs.iota(0, 19).map((elem) => A001539(elem))).toEqual([
    3, 35, 99, 195, 323, 483, 675, 899, 1155, 1443, 1763, 2115, 2499, 2915,
    3363, 3843, 4355, 4899, 5475, 6083,
  ])
})
