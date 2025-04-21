// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen } = require('./app.js');

// Comienza tu primera prueba
test('adds 7 + 3 to equal 10', () => {
    const num1 = 7;
    const num2 = 3;
    const total = sum(num1, num2);
    const expected = num1 + num2;
    expect(total).toBe(expected);
});

test("One euro should be 1.07 dollars", function() {
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});

test("One euro should be 547.75 yen", function() {
    const euros = 3.5;
    const yen = fromEuroToYen(euros);
    const expected = euros * 156.5;
    expect(yen).toBe(expected);
});

test("One euro should be 3.045 pound", function() {
    const euros = 3.5;
    const pound = fromEuroToPound(euros);
    const expected = euros * 0.87;
    expect(pound).toBe(expected);
});