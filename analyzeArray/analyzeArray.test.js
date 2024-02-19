const anal = require('./analyzeArray');

test('array of 5 numbers', () => {
    expect(anal([2, 4, 6, 8, 10])).toEqual({
        average: 6,
        min: 2,
        max: 10,
        length: 5 
    });
    expect(anal([100, 1234, 69, 1, -50])).toEqual({
        average: 270.8,
        min: -50,
        max: 1234,
        length: 5
    });
    expect(anal([-100, -50, 0, -125, -200])).toEqual({
        average: -95,
        min: -200,
        max: 0,
        length: 5
    });
});

test('array of 1 number', () => {
    expect(anal([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
    })
    expect(anal([2.5])).toEqual({
        average: 2.5,
        min: 2.5,
        max: 2.5,
        length: 1
    })
})

test('empty array', () => {
    expect(anal([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    })
})

test('invalid inputs', () => {
    expect(anal(['whee'])).toThrow(Error);
    expect(anal(undefined)).toThrow(Error);
    expect(anal(null)).toThrow(Error);
    expect(anal()).toThrow(Error);
    expect(anal(['1', '2', '3', '4'])).toThrow(Error);
})