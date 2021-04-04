class Node {
    constructor(val = "", left = null, right = null) {
        this.val = val || "";
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }
}

function recursivePreOrder(root) {
    if (!root) return;
    console.log(root.val);
    recursivePreOrder(root.left);
    recursivePreOrder(root.right);
}

function createDemoTree() {
    const root = new Node(1);
    const t = new Tree(root);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    recursivePreOrder(root);
}

createDemoTree();
