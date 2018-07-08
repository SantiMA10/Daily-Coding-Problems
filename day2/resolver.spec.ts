import { resolver } from "./resolver";

describe("Day #1", () => {
    test("if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].", () => {
        expect(resolver([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
    test("If our input was [3, 2, 1], the expected output would be [2, 3, 6]", () => {
        expect(resolver([3, 2, 1])).toEqual([2, 3, 6]);
    });
});
