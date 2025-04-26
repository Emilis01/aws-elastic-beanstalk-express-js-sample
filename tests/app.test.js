const { add } = require('../app');

test('add function should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
