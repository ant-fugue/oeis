import { nthA000930Number } from '../sequences/A000930'
import assert from 'assert'

describe('nthA000930 test', () => {
  it('returns the n-th A000930 number(n starts from 0)', () => {
    assert.strictEqual(nthA000930Number(0), 1)
    assert.strictEqual(nthA000930Number(1), 1)
    assert.strictEqual(nthA000930Number(3), 2)
    assert.strictEqual(nthA000930Number(14), 129)
  })
})
