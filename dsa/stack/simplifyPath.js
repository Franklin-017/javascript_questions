const input = "/home//foo/../bar//null";

/*
    "..": Go up one level (pop).
    "." or empty "": Stay in current directory (ignore).
    Any other string: A directory name (push).
*/

function simplifyPath(path) {
    const pathArray = path.split("/");
    const simplePath = [];
    
    for (let directory of pathArray) {
        if (directory === "..") {
            simplePath.pop();
        } else if (directory !== "." && directory) {
            simplePath.push(directory);
        }
    }
    
    return "/" + simplePath.join("/");
}

console.log(simplifyPath(input));
