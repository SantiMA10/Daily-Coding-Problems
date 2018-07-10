import { resolver } from "./resolver";

describe("Day #4", () => {
    test("[3, 4, -1, 1] => 2", () => {
        const input = [3, 4, -1, 1];
        expect(resolver(input)).toBe(2);
    });

    test("[3, 4, -1, 1, 2, 6] => 5", () => {
        const input = [3, 4, -1, 1, 2, 6];
        expect(resolver(input)).toBe(5);
    });

    test("[3, 4, -1, 1, 2, 5, 6] => null", () => {
        const input = [3, 4, -1, 1, 2, 5, 6];
        expect(resolver(input)).toBe(null);
    });
});
