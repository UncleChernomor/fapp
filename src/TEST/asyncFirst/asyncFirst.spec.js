const delay = require("./asyncFist");

describe('delay: ', () => {
    test('корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 500);
        expect(sum).toBe(10);

        const multiplay = await delay(() => 2 * 2, 500);
        expect(multiplay).toBe(4);
    });
});