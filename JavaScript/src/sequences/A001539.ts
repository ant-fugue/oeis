import QJS from '../qjs'

export const isA001539Num = (n: number): boolean | string => {
  if (!Number.isInteger(n)) {
    return 'input should be integer'
  }
  if (n % ((4 * n + 1) * (4 * n + 3))) return true
  else return false
}

export const generateA001539Num = (n: number) => (4 * n + 1) * (4 * n + 3)

console.log(isA001539Num(0.1))
console.log(isA001539Num(12))
console.log(QJS.iota(1, 10).map((elem: number) => generateA001539Num(elem)))
