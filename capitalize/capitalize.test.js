const capitalize = require('./capitalize');

test('expect first character to be capitalized', () => {
    expect(capitalize('test')).toBe('Test');
})

test('expect capitalization only of the first word', () => {
    expect(capitalize('test text')).toBe('Test text');
})

