QUnit.module("calculate Discount tests", () => {

    QUnit.test("Expect undefined parameter to return zeroes", (assert) => {
        // 1. Arrange
        const order = undefined;
        const expected = {
            total: 0,
            tax: 0,
            shipping: 0
        }

        // 2. Act
        const actual = calculateDiscount(order);

        // 3. Assert
        assert.propEqual(actual, expected);
    });

    QUnit.test("Expect order with no items to return zeroes", (assert) => {
        // 1. Arrange
        const order = {};
        const expected = {
            total: 0,
            tax: 0,
            shipping: 0
        }

        // 2. Act
        const actual = calculateDiscount(order);

        // 3. Assert
        assert.propEqual(actual, expected);
    });

    QUnit.test("Expect order with no array items to return zeroes", (assert) => {
        // 1. Arrange
        const order = {
            items: {}
        };
        const expected = {
            total: 0,
            tax: 0,
            shipping: 0
        }

        // 2. Act
        const actual = calculateDiscount(order);

        // 3. Assert
        assert.propEqual(actual, expected);
    });

    QUnit.test("Expect no items to return zeroes", (assert) => {
        // 1. Arrange
        const order = {
            items: []
        };
        const expected = {
            total: 0,
            tax: 0,
            shipping: 0
        }

        // 2. Act
        const actual = calculateDiscount(order);

        // 3. Assert
        assert.propEqual(actual, expected);
    });

    QUnit.test("Expect one non-food item to have correct price, non-discounted tax, and increased shipping", (assert) => {
        // 1. Arrange
        const order = {
            items: [
                {
                    category: "Not-food",
                    price: 100,
                    quantity: 1
                }
            ]
        };
        const expected = {
            total: 100,
            tax: 18,
            shipping: 3.75
        }

        // 2. Act
        const actual = calculateDiscount(order);

        // 3. Assert
        assert.propEqual(actual, expected);
    });

});


