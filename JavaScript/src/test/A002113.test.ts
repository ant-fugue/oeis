import { isA002113 } from '../sequences/A002113'
import assert from 'assert'

describe('isA002113', () => {
  it('returns true if the given argument is a palindrome', () => {
    assert.strictEqual(isA002113(5), true)
    assert.strictEqual(isA002113(11), true)
    assert.strictEqual(isA002113(1221), true)
    assert.strictEqual(isA002113(123474321), true)
    assert.strictEqual(isA002113(121), true)
    assert.strictEqual(isA002113(1243), false)
  })
})
