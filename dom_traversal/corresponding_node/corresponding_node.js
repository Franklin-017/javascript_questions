const rootA = document.getElementById('treeA');
const rootB = document.getElementById('treeB');
const targetNode = document.getElementById('target');

function getCorrespondingPath(parent, target) {
    const path = [];
    let currentNode = target;

    while(currentNode !== parent) {
        const parentElement = currentNode.parentNode;
        const index = Array.from(parentElement.children).indexOf(currentNode);

        path.push(index);
        currentNode = parentElement;
    }
    return path;
}
    
function findCorrespondingNode(rootA, rootB, target) {
    if (rootA === target) return rootB;

    const path = getCorrespondingPath(rootA, target);

    let matchedNode = rootB;
    while(path.length > 0) {
        const indexToTake = path.pop();
        matchedNode = matchedNode.children[indexToTake];
    }
    return matchedNode;
}


const matchedNode = findCorrespondingNode(rootA, rootB, targetNode);
        
if (matchedNode) {
    matchedNode.classList.add('highlight');
}
