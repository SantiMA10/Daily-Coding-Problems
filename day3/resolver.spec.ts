import { deserialize, Node, serialize } from "./resolver";

describe("Day #3", () => {
    test("Without serialize", () => {
        const node = new Node("root", new Node("left", new Node("left.left")), new Node("right"));
        expect(node.left.left.val).toBe("left.left");
    });

    describe("serialize", () => {

        test("without grandchildren", () => {
            const node = new Node("root", new Node("left"), new Node("rigth"));
            // tslint:disable-next-line:max-line-length
            expect(serialize(node)).toBe("{\"val\":\"root\",\"left\":{\"val\":\"left\"},\"rigth\":{\"val\":\"rigth\"}}");
        });

        test("with grandchildren", () => {
            const node = new Node("root", new Node("left", new Node("left.left")), new Node("rigth"));
            // tslint:disable-next-line:max-line-length
            expect(serialize(node)).toBe("{\"val\":\"root\",\"left\":{\"val\":\"left\",\"left\":{\"val\":\"left.left\"}},\"rigth\":{\"val\":\"rigth\"}}");
        });

    });

    describe("deserialize", () => {

        test("without grandchildren", () => {
            // tslint:disable-next-line:max-line-length
            const node = deserialize("{\"val\":\"root\",\"left\":{\"val\":\"left\"},\"rigth\":{\"val\":\"rigth\"}}");
            expect(node.left.val).toBe("left");
            expect(node.rigth.val).toBe("rigth");
        });

        test("with grandchildren", () => {
            // tslint:disable-next-line:max-line-length
            const node = deserialize("{\"val\":\"root\",\"left\":{\"val\":\"left\",\"left\":{\"val\":\"left.left\"}},\"rigth\":{\"val\":\"rigth\"}}");
            expect(node.left.left.val).toBe("left.left");
        });

    });
});
