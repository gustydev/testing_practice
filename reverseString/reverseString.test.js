const reverse = require('./reverseString');

test('reverse string', () => {
    expect(reverse('Test text')).toBe('txet tseT');
})

test('palindrome case', () => {
    expect(reverse('a torre da derrota')).toBe('atorred ad errot a');
})

