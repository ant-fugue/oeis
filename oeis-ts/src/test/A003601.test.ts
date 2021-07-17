import { isA003601 } from '../sequences/A003601'
import assert from 'assert'

describe('isA003601', () => {
  it('returns true if the average of the divisors of n is an integer', () => {
    assert.deepStrictEqual(isA003601(1), true)
    assert.deepStrictEqual(isA003601(5), true)
    assert.deepStrictEqual(isA003601(30), true)
    assert.deepStrictEqual(isA003601(4), false)
  })
})

// TODO test for a sequence generation function
// TODO test for integers corresponding to a index of the sequence
