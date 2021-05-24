import QJS from '../qjs'
const qjs = new QJS()

// see detail of this sequence at:
// https://oeis.org/A003586
// https://en.wikipedia.org/wiki/Smooth_number

export const isThreeSmoothNum = (num: number): boolean => {
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2
    else if (num % 3 === 0) num = num / 3
    else return false
  }
  return true
}

// show how each number of 3-smooth number is factorized
const g = (num: number) => {
  let a = 0
  let b = 0
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
      a++
    } else if (num % 3 === 0) {
      num = num / 3
      b++
    } else return false
  }
  return `${2 ** a * 3 ** b} = 2^${a} * 3^${b}`
}

// console.log(qjs.iota(1, 100).map(elem => g(elem)).filter(e => e !== false))
