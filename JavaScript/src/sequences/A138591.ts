import assert from 'assert'

const iota = (min: number, max: number) => {
  const arr = []
  for (let i = min; i < max + 1; i++) {
    arr.push(i)
  }
  return arr
}

const A138591 = (num: number) => {}

// assert.deepStrictEqual(A138591(), [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17])
