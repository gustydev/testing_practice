const caesar = require('./caesarCipher')

test('factor of 3 left', () => {
    expect(caesar('The quick brown fox jumped over the lazy dog', -3)).toBe('QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD');
    expect(caesar('Test (with) punctuation!', -3)).toBe('QBPQ (TFQE) MRKZQRXQFLK!');
})

test('factor of zero', () => {
    expect(caesar('The quick brown fox', 0)).toBe('The quick brown fox');
})

test('factor of 3 right', () => {
    expect(caesar('The quick brown fox jumped over the lazy dog', 3)).toBe('WKH TXLFN EURZQ IRA MXPSHG RYHU WKH ODCB GRJ');
    expect(caesar('Test (with) punctuation!', 3)).toBe('WHVW (ZLWK) SXQFWXDWLRQ!');
})

test('very high factors', () => {
    expect(caesar('Test of very high factors', 133742069)).toBe('MXLM HY OXKR ABZA YTVMHKL')
    expect(caesar('Test of very high factors', -123456789)).toBe('SDRS NE UDQX GHFG EZBSNQR')
})