export const resolver = (numbers: number[]): number[] => {
    return numbers.map((n) => {
        return numbers.reduce((total, n2) => {
            return n2 !== n ? total * n2 : total;
        }, 1);
    });
};
