import QJS from '../../qjs'
const qjs = new QJS()

const isSquareFree = (num: number) => {
  for (let i = 2; i < num + 1; i++) {
    if (num % i ** 2 === 0) return false
  }
  return true
}

const squareFreeList = (start: number, end: number) =>
  qjs.iota(start, end).filter((elem: number) => isSquareFree(elem))
// const countSquareFree = (start, end) => squareFreeList(start, end).reduce((accumulator, currentValue) => accumulator + currentValue);
const countSquareFree = (start: number, end: number) => {
  let counter = 0
  squareFreeList(start, end).forEach((elem: number) => counter++)
  return counter
}

console.log(squareFreeList(1, 145))

console.log()
// console.log(squareFreeList(1e12,1e12+145));
// console.log(countSquareFree(1e12,1e12+145));

const divSum = (num: number) => {
  const divisors = []
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) divisors.push(i)
  }
  return divisors.reduce((a, c) => a + c)
}
