export const resolver = (numbers: number[], k: number): boolean => {

    return numbers.reduce((sumK, actual) => {

        const numbersWithoutActual = numbers.filter((n) => n !== actual);
        const actualNumberSumK = numbersWithoutActual.reduce((actualSumK, other) => {
            return actualSumK || (actual + other === k);
        }, false);

        return sumK || actualNumberSumK;

    }, false);
};
