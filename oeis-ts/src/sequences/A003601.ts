// TODO Create a function which judges whether the given number is in the sequence
// TODO Generate a sequence of numbers up to the given argument
// TODO Generate integers corresponding to a sequence of numbers.

import QJS from '../Qjs'

export const isA003601 = (n: number): boolean => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw Error('the argument must be natural numbers')
  }
  const divisors: number[] = QJS.divOf(n)
  const average = divisors.reduce((acc: number, cur: number) => acc + cur, 0)
  if (Number.isInteger(average / divisors.length)) {
    return true
  }
  return false
}
