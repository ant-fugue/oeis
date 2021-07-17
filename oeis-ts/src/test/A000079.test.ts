import { isA000079 } from '../sequences/A000079'
import assert from 'assert'

// the inclusion judging test
describe('isA000079', () => {
  it('returns true if the given argument is a powers of two', () => {
    assert.strictEqual(isA000079(0), false)
    assert.strictEqual(isA000079(1), true)
    assert.strictEqual(isA000079(8), true)
    assert.strictEqual(isA000079(2048), true)
    assert.strictEqual(isA000079(10), false)
  })
})

// TODO the sequence generation test
// TODO the index extraction test
