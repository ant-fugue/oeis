export const isA002113 = (num: number): boolean => {
  if (!Number.isInteger(num)) {
    throw Error('the argument must be integer')
  }
  const str = num.toString()
  let former: string
  let latter: string
  if (str.length % 2 === 0) {
    former = str.substring(Math.floor(str.length / 2), str.length)
    latter = str.substring(0, Math.floor(str.length / 2))
  } else {
    former = str.substring(0, Math.floor(str.length / 2))
    latter = str.substring(Math.floor(str.length / 2) + 1, str.length)
  }
  if (former === latter.split('').reverse().join('')) {
    return true
  }
  return false
}
