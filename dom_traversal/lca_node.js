function getLCA(node1, node2) {
    if (!node1 || !node2) return null;
    if (node1 === node2) return node1;

    const path1 = new Set();
    let current1 = node1;

    while(current1) {
        path1.add(current1);
        current1 = current1.parentElement;
    }

    let current2 = node2;
    while(current2) {
        if (path1.has(current2)) {
            return current2;
        }
        current2 = current2.parentElement;
    }

    return null;
}