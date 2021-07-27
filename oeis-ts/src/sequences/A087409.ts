// http://oeis.org/A087409

// TODO Create a function which judges whether the given number is in the sequence
// TODO Generate integers corresponding to a sequence of numbers.

export const generateA087409Sequences = (n: number): string[] => {
  // generate the sequence of 6 multiples
  const numberArr: number[] = []
  for (let i = 1; i < n + 2; i++) {
    numberArr.push(6 * i)
  }

  // create an array which is grouped in pairs by 2
  const str: string = numberArr.join('')
  const strArr: string[] = []
  for (let i = 0; i < str.length; i += 2) {
    strArr.push(str[i] + str[i + 1])
  }
  const formattedArr = strArr.slice(0, strArr.length - 1)

  // omitting leading zeros for each element
  const result = formattedArr.map((elem) => {
    if (elem.startsWith('0')) {
      return elem.substring(1)
    }
    return elem
  })

  return result
}
