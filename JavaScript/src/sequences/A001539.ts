export const isA001539Num = (n: number): boolean => {
  if (!Number.isInteger(n)) {
    throw Error('input should be integer')
  }
  if (n % ((4 * n + 1) * (4 * n + 3))) return true
  else return false
}

export const generateA001539Num = (n: number) => {
  if (!Number.isInteger(n)) {
    throw Error('input should be integer')
  }
  return (4 * n + 1) * (4 * n + 3)
}
