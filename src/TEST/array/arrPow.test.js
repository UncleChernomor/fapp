const powArray = require('./arrPow');

describe('TEST func arrPow', () => {
    const arr = [1, 2, null, undefined, '43', -1, -3];
    const resArr = [1, 4, 1, 9];

    test('varios values', () => {
        expect(powArray(arr)).toEqual(resArr);
    });
});