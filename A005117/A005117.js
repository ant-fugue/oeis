const QJS = require('../qjs')
const qjs = new QJS()

const isSquareFree = (num) => {
  for (let i = 2; i < num + 1; i++) {
    if (num % i ** 2 === 0) return false
  }
  return true
}

const squareFreeList = (start, end) =>
  qjs.iota(start, end).filter((elem) => isSquareFree(elem))
// const countSquareFree = (start, end) => squareFreeList(start, end).reduce((accumulator, currentValue) => accumulator + currentValue);
const countSquareFree = (start, end) => {
  let counter = 0
  squareFreeList(start, end).forEach((elem) => counter++)
  return counter
}

console.log(squareFreeList(1, 145))

console.log()
// console.log(squareFreeList(1e12,1e12+145));
// console.log(countSquareFree(1e12,1e12+145));

const divSum = (num) => {
  let divisors = []
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) divisors.push(i)
  }
  return divisors.reduce((a, c) => a + c)
}
