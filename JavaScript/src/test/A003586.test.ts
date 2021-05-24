import { TestScheduler } from 'jest'
import QJS from '../qjs.js'
import isThreeSmoothNum from '../../JavaScript/sequences/A003586'
const qjs = new QJS()

test('list of natural numbers whose prime factors are 2 or 3', () => {
  expect(qjs.iota(1, 20).filter((elem) => isThreeSmoothNum(elem))).toEqual([
    1, 2, 3, 4, 6, 8, 9, 12, 16, 18,
  ])
})
