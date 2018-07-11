export const cons = (a: number, b: number) => {
    const pair = (f) => {
        return f(a, b);
    };

    return pair;
};

export const car = (pair): number => {
    let result = null;
    pair((a) => result = a);
    return result;
};

export const cdr = (pair): number => {
    let result = null;
    pair((_, b) => result = b);
    return result;
};
