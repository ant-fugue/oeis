export const isA002113 = (num: number): boolean => {
  if (!Number.isInteger(num)) {
    throw Error('the argument must be integer')
  }
  const str = num.toString()
  const former = str.substring(0, Math.floor(str.length / 2))
  const latter = str.substring(Math.ceil(str.length / 2), str.length)
  if (former === latter.split('').reverse().join('')) {
    return true
  }
  return false
}
