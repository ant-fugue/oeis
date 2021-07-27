import { generateA087409Sequences } from '../sequences/A087409'

// the sequence generation test
describe('generateA087409Sequences', () => {
  it('returns the sequence of A087409 within the given index', () => {
    expect(generateA087409Sequences(1)).toEqual(['61'])
    expect(generateA087409Sequences(2)).toEqual(['61', '21'])
    expect(generateA087409Sequences(5)).toEqual(['61', '21', '82', '43', '3'])
  })
})

// TODO the inclusion judging test
// TODO the index extraction test
