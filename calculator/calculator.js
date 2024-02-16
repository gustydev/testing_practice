class Calculator {
    add(x, y) {
        return Number(x) + Number(y);
    }
    subtract(x, y) {
        return Number(x) - Number(y);
    }
    divide(x, y) {
        if (Number(y) === 0) {
            return undefined;
        }
        return Number(x) / Number(y);
    }
    multiply(x, y) {
        return Number(x) * Number(y);
    }
}

module.exports = Calculator;