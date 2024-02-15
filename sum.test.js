const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('minus one thats 3', () => {
    expect(4 - 1).toBe(3);
})

test('object assign', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
});

test('roundin', () => {
    expect(2.49999999999).toBeCloseTo(2.5);
});

test('stop', () => {
    expect('stop, hammer time').toMatch(/stop/);
    expect('shop, tammer mite').not.toMatch(/stop/)
})