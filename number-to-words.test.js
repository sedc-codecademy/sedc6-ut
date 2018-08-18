const tester = {
    equals: (actual, expected, name) => {
        if (actual === expected) {
            console.log("Pass");
            return true;
        } else {
            console.log(`Fail: ${name}. Expected ${expected}, gotten ${actual}`);
            return false;
        }
    },
    approximate: (actual, expected, epsilon, name) => {
        if (Math.abs(actual - expected) < epsilon) {
            console.log("Pass");
            return true;
        } else {
            console.log(`Fail: ${name}. Expected ${expected}, gotten ${actual}`);
            return false;
        }
    },
}

const numberToWords_Test_Suite = (() => {
    const test_0 = ((name) => {
        // 1. Arrange
        const value = 0;
        const expected = "zero";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 0 to give zero");

    const test_2 = ((name) => {
        // 1. Arrange
        const value = 2;
        const expected = "two";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 2 to give two");

    const test_8 = ((name) => {
        // 1. Arrange
        const value = 8;
        const expected = "eight";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 8 to give eight");

    const test_28 = ((name) => {
        // 1. Arrange
        const value = 28;
        const expected = "twenty eight";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 28 to give twenty eight");

    const test_20 = ((name) => {
        // 1. Arrange
        const value = 20;
        const expected = "twenty";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 20 to give twenty");

    const test_15 = ((name) => {
        // 1. Arrange
        const value = 15;
        const expected = "fifteen";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 15 to give fifteen");

    const test_10 = ((name) => {
        // 1. Arrange
        const value = 10;
        const expected = "ten";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 10 to give ten");

    const test_100 = ((name) => {
        // 1. Arrange
        const value = 100;
        const expected = "one hundred";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 100 to give one hundred");

    const test_104 = ((name) => {
        // 1. Arrange
        const value = 104;
        const expected = "one hundred four";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 104 to give one hundred four");

    const test_115 = ((name) => {
        // 1. Arrange
        const value = 115;
        const expected = "one hundred fifteen";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 115 to give one hundred fifteen");

    const test_165 = ((name) => {
        // 1. Arrange
        const value = 165;
        const expected = "one hundred sixty five";

        // 2. Act
        const actual = numberToWords(value);

        // 3. Assert
        tester.equals(actual, expected, name);
    })("Expect the number 165 to give one hundred sixty five");
})();