// see detail of this sequence at:
// https://oeis.org/A003586
// https://en.wikipedia.org/wiki/Smooth_number

export const isThreeSmoothNum = (num: number): boolean => {
  if (!Number.isInteger(num) || num < 0) {
    throw Error('the argument should be integer')
  }
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2
    else if (num % 3 === 0) num = num / 3
    else return false
  }
  return true
}

// show how each number of 3-smooth number is factorized
const g = (num: number): string => {
  if (!Number.isInteger(num) || num < 0) {
    throw Error('the argument should be integer')
  }
  let a = 0
  let b = 0
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
      a++
    } else if (num % 3 === 0) {
      num = num / 3
      b++
    } else {
      return `${num} is not a 3-smooth number`
    }
  }
  return `${2 ** a * 3 ** b} = 2^${a} * 3^${b}`
}
