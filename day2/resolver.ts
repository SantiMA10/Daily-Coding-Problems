export const resolver = (numbers: number[]): number[] => {
    return numbers.map((n, index) => {
        const arrayWithoutN = numbers.filter((_, index2) => index !== index2);
        return arrayWithoutN.reduce((n2, n3) => {
            return n2 * n3;
        });
    });
};
