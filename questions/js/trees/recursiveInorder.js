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

function recursiveInorder(root) {
    if (!root) return;
    recursiveInorder(root.left);
    console.log(root.val);
    recursiveInorder(root.right);
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
    recursiveInorder(root);
}

createDemoTree();
