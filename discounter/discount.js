const flatRate = 0.18;
const foodRate = 0.05;
const itemShipping = 3;

// calculates tax and shipping on an order
// items that are food have foodRate tax
// other items have flatRate tax
// if more than 7 items are shipped, shipping is waived and tax is reduced 20%
// if more than 3 items are shipped, shipping is regular and tax is reduced 10%
// else shipping is increased 25%

// if parameter is invalid return zeroes

function calculateDiscount (order) {

    if (!(order && order.items)){
        return {
            total: 0,
            tax: 0,
            shipping: 0
        }
    }

    let sum = 0;
    let tax = 0;
    let shipping = 0;
    for (let index = 0; index < order.items.length; index++) {
        const orderItem = order.items[index];
        sum = orderItem.price * orderItem.quantity;
        tax += orderItem.price * orderItem.quantity * flatRate;

        if (orderItem.category === "Food") {
            tax += orderItem.price * orderItem.quantity * foodRate;
        }

        shipping += itemShipping;
    }

    if (order.items.length > 7) {
        tax = tax * 0.8;
        shipping = 0;
    }

    if (order.items.length > 3) {
        tax = tax * 0.9;
    }

    if (order.items.length < 3) {
        shipping = shipping * 1.25;
    }

    return {
        total: sum,
        tax: tax,
        shipping: shipping
    }
}