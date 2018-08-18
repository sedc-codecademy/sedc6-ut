QUnit.module("Number to words tests", () => {

    QUnit.test("Expect the number 0 to give zero", (assert) => {
        // 1. Arrange
        const value = 0;
        const expected = "zero";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        assert.equal(actual, expected, "Thou shall pass");
    });

    QUnit.test("Expect the number 2 to give two", (assert) => {
        // 1. Arrange
        const value = 2;
        const expected = "two";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 8 to give eight", (assert) => {
        // 1. Arrange
        const value = 8;
        const expected = "eight";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 28 to give twenty eight", (assert) => {
        // 1. Arrange
        const value = 28;
        const expected = "twenty eight";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 20 to give twenty", (assert) => {
        // 1. Arrange
        const value = 20;
        const expected = "twenty";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 15 to give fifteen", (assert) => {
        // 1. Arrange
        const value = 15;
        const expected = "fifteen";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 10 to give ten", (assert) => {
        // 1. Arrange
        const value = 10;
        const expected = "ten";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 100 to give one hundred", (assert) => {
        // 1. Arrange
        const value = 100;
        const expected = "one hundred";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 104 to give one hundred four", (assert) => {
        // 1. Arrange
        const value = 104;
        const expected = "one hundred four";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 115 to give one hundred fifteen", (assert) => {
        // 1. Arrange
        const value = 115;
        const expected = "one hundred fifteen";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
    
    QUnit.test("Expect the number 165 to give one hundred sixty five", (assert) => {
        // 1. Arrange
        const value = 165;
        const expected = "one hundred sixty five";
    
        // 2. Act
        const actual = numberToWords(value);
    
        // 3. Assert
        assert.equal(actual, expected, name);
    });
});


