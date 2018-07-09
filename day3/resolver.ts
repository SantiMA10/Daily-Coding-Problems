export class Node {
    constructor(
        public val: string,
        public left?: Node,
        public rigth?: Node,
    ) {}
}

export const serialize = (node: Node): string => {
    return JSON.stringify(node);
};

export const deserialize = (nodeSelialize: string): Node => {
    const nodeJson = JSON.parse(nodeSelialize);
    const node = new Node(nodeJson.val);

    if (nodeJson.left) {
        node.left = deserialize(JSON.stringify(nodeJson.left));
    }

    if (nodeJson.rigth) {
        node.rigth = deserialize(JSON.stringify(nodeJson.rigth));
    }

    return node;
};
