import QJS from '../qjs'

const isA = (n: number): boolean | string => {
  if (!Number.isInteger(n)) {
    return 'input should be integer'
  }
  if (n % ((4 * n + 1) * (4 * n + 3))) return true
  else return false
}

export const A001539 = (n: number) => (4 * n + 1) * (4 * n + 3)

console.log(isA(0.1))
console.log(isA(12))
console.log(QJS.iota(1, 10).map((elem: number) => A001539(elem)))
