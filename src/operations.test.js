const operations = require('./operations')

describe('Test operations: ', () => {

  test('add 1 + 2 to be equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3)
  })

  test('sub 2 - 1 to be equal 1', () => {
    expect(operations.sub(2, 1)).toBe(1)
  })

  test('mult 1 x 2 to be equal 2', () => {
    expect(operations.mult(1, 2)).toBe(2)
  })

  test('div 10 / 5 to be equal 2', () => {
    expect(operations.div(10, 5)).toBe(2)
  })

  test('mod 10 % 5 to be equal 0', () => {
    expect(operations.mod(10, 5)).toBe(0)
  })

})
