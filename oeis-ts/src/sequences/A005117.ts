// https://oeis.org/A005117
// called as square free numbers, which is not divisible by a square greater than 1

// TODO a function which returns true if the given number is in the sequence
export const isSquareFree = (num: number): boolean => {
  for (let i = 2; i < num + 1; i++) {
    if (num % i ** 2 === 0) return false
  }
  return true
}

// TODO a function which returns a sequence of numbers up to the given index

// TODO a function which returns an integer corresponding to an index of the sequence

// export const squareFreeList = (start: number, end: number) =>
//   QJS.iota(start, end).filter((elem: number) => isSquareFree(elem))
// // const countSquareFree = (start, end) => squareFreeList(start, end).reduce((accumulator, currentValue) => accumulator + currentValue);
// const countSquareFree = (start: number, end: number) => {
//   let counter = 0
//   squareFreeList(start, end).forEach((elem: number) => counter++)
//   return counter
// }
