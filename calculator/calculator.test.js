const calcExp = require('./calculator');
const calc = new calcExp();

// Addition
test('add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
})

test('add strings', () => {
    expect(calc.add('1', '2')).toBe(3);
})

test('add floating points', () => {
    expect(calc.add(1.5, 1.3)).toBeCloseTo(2.8);
})

// Subtraction
test('subtract two numbers', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
})

test('subtract strings', () => {
    expect(calc.subtract('1', '2')).toBe(-1);
})

test('subtract floating points', () => {
    expect(calc.subtract(1.5, 1.3)).toBeCloseTo(0.2);
})

test('subtract negative numbers', () => {
    expect(calc.subtract(-2, -5)).toBe(3);
})

// Division
test('divide two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
})

test('divide strings', () => {
    expect(calc.divide('10', '2')).toBe(5);
})

test('divide floating points', () => {
    expect(calc.divide(4.5, 2.5)).toBeCloseTo(1.8);
})

test('divide negative numbers', () => {
    expect(calc.divide(-10, -2)).toBe(5);
})

test('divide by zero', () => {
    expect(calc.divide(2, 0)).toBe(undefined);
    expect(calc.divide(0, 0)).toBe(undefined);
})

// Multiplication
test('multiply two numbers', () => {
    expect(calc.multiply(10, 2)).toBe(20);
})

test('multiply strings', () => {
    expect(calc.multiply('10', '2')).toBe(20);
})

test('multiply floating points', () => {
    expect(calc.multiply(4.5, 2.5)).toBeCloseTo(11.25);
})

test('multiply negative numbers', () => {
    expect(calc.multiply(-10, -2)).toBe(20);
})