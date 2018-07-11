import { car, cdr, cons } from "./resolver";

describe("Day #5", () => {
    test("car(cons(3, 4)) returns 3", () => {
        expect(car(cons(3, 4))).toBe(3);
    });

    test("cdr(cons(3, 4)) returns 4", () => {
        expect(cdr(cons(3, 4))).toBe(4);
    });
});
