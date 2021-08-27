// Dudeney numbers
// https://oeis.org/A046459

import QJS from '../Qjs'

// TODO a function which returns true if the given number is in the sequence
export const isA046459Num = (n: number): boolean => {
  if (n < 0 || !Number.isInteger(n)) {
    throw Error('the argument must be non-negative integer')
  }
  const cube = n * n * n
  const result = QJS.getIntArrayFromInt(cube).reduce(
    (acc, curr) => acc + curr,
    0
  )
  if (n === result) {
    return true
  }
  return false
}

// TODO Create a function which judges whether the given number is in the sequence
// TODO Generate a sequence of numbers up to the given argument
