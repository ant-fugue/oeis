import { nthA000330Number } from '../sequences/A000330'
import assert from 'assert'

describe('nthA000330Number', () => {
  it('returns the n-th A000330 number', () => {
    assert.strictEqual(nthA000330Number(0), 0)
    assert.strictEqual(nthA000330Number(1), 0)
    assert.strictEqual(nthA000330Number(10), 285)
  })
})
