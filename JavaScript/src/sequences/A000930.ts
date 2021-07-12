// const A001539 = require('../A001539')
// const QJS = require('../qjs')
// const qjs = new QJS()

export const A000930 = (n: number): number => {
  if (!Number.isInteger(n) || n < 0) {
    throw Error('arguments must be a natural number')
  }
  if (n === 0 || n === 1) {
    return 1
  } else {
    return A000930(n - 1) + A000930(n - 3)
  }
}
console.log(A000930(5))
// console.log(qjs.iota(1, 10).map((elem) => A001539(elem)))

// module.exports = A000930
