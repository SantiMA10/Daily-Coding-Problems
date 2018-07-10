export const resolver = (numbers: number[]): number => {
    const orderNumbers = numbers.filter((n) => n >= 0).sort();
    let last = orderNumbers[0];
    let response = null;

    orderNumbers.forEach((n) => {
        if (n - last > 1) {
            response = last + 1;
        }

        last = n;
    });

    return response;
};
