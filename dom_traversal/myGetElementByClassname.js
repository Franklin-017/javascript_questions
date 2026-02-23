function myGetElementByClassname(root, targetClass) {
    if (!root) return [];
    const result = [];

    if (root.classList && root.classList.contains(targetClass)) {
        result.push(root);
    }

    for(let child of root.children) {
        const childrenWithClass = myGetElementByClassname(child, targetClass);

        result.push(...childrenWithClass);
    }
    return result;
}