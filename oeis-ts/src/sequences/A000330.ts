export const nthA000330Number = (n: number): number => {
  if (n <= 0) {
    throw Error('index must be the positive integer')
  }
  const arr: number[] = []
  for (let i = 0; i < n; i++) {
    arr.push(i ** 2)
  }
  return arr.reduce((acc, cur) => acc + cur, 0)
}
