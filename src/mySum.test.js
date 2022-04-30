const mySum = require('./mySum');

describe('mySum', () => {
    test('two positive', () => {
        expect(mySum(2, 2)).toBe(4);
    });

    test('two negative', () => {
        expect(mySum(-2, -2)).toBe(-4);
    });


    test('first positive, second negative', () => {
        expect(mySum(2, -2)).toBe(0);
    });

    test('first negative, second positive', () => {
        expect(mySum(-2, 2)).toBe(0);
    });
});