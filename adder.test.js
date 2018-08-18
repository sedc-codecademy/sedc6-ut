const tester = (actual, expected, name) => {
    if (actual === expected) {
        console.log("Pass");
        return true;
    } else {
        console.log(`Fail: ${name}. Expected ${expected}, gotten ${actual}`);
        return false;
    }
}

const test1 = ((name) => {
    // 1. Arrange
    const first = 2;
    const second = 0;
    const expected = 2;

    // 2. Act
    const actual = add(first, second);

    // 3. Assert
    tester(actual, expected, name);
})("Expect adder to return first argument if second argument is zero");

const test2 = ((name) => {
    // 1. Arrange
    const first = 2;
    const second = 2;
    const expected = 4;

    // 2. Act
    const actual = add(first, second);

    // 3. Assert
    tester(actual, expected, name);
})("Expect adder to double same argument");

const test_arrays = ((name) => {
    // 1. Arrange
    const first = [1, 2, 3];
    const second = ['a', 'b', 'c'];
    const expected = null;

    // 2. Act
    const actual = add(first, second);

    // 3. Assert
    tester(actual, expected, name);
})("If both arguments are arrays expect to return null");

const test_objects = ((name) => {
    // 1. Arrange
    const first = { x: 1 };
    const second = { x: 0, y: 2 };
    const expected = null;

    // 2. Act
    const actual = add(first, second);

    // 3. Assert
    tester(actual, expected, name);
})("If both arguments are objects expect to return null");

const test_second_array = ((name) => {
    // 1. Arrange
    const first = 1;
    const second = ['a', 'b', 'c'];
    const expected = null;

    // 2. Act
    const actual = add(first, second);

    // 3. Assert
    tester(actual, expected, name);
})("If second argument is array expect to return null");