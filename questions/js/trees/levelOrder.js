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

function recursiveLevelOrder(root, level) {
    if (!root) return;
    if (level == 1) console.log(root.val);
    else {
        recursiveLevelOrder(root.left, level - 1);
        recursiveLevelOrder(root.right, level - 1);
    }
}

function calculateHeight(root) {
    if (!root) return 0;
    let lHeight = calculateHeight(root.left);
    let rHeight = calculateHeight(root.right);
    if (lHeight >= rHeight) return lHeight + 1;
    return rHeight + 1;
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
    let height = calculateHeight(root);
    console.log("Height of the tree is - ", height);

    // recursive call fro printing level order
    /* for (let i = 1; i <= height; i++) {
      recursiveLevelOrder(root, i);
    } */

    const arr = [root];
    while (arr.length > 0) {
        const item = arr.shift();
        if (item.left) arr.push(item.left);
        if (item.left) arr.push(item.right);
        console.log(item.val);
    }
}

createDemoTree();
