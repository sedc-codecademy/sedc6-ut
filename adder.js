const add = (x, y) => {
    if (typeof x === "object"){
        return null;
    }
    if (Array.isArray(x) || Array.isArray(y)) {
        return null;
    }
    return x + y;
};