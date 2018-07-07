import { resolver } from "./resolver";

describe("Day #1", () => {
    test("given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.", () => {
        const numbers = [10, 15, 3, 7];
        const k = 17;
        expect(resolver(numbers, k)).toBe(true);
    });
    test("given [10, 15, 3, 7] and k of 27, return false.", () => {
        const numbers = [10, 15, 3, 7];
        const k = 27;
        expect(resolver(numbers, k)).toBe(false);
    });
});
