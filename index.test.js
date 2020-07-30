const { sum } = require('./')

describe('sum(a + b)', () => {
  it('1 + 1 = 2', () => {
    expect(sum(1,1)).toEqual(2)
  })
})
