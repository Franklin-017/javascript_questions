function balanceBrackets(str) {
    const stack = [];
    const pair = {
        "]": "[",
        ")": "(",
        "}": "{"
    }
    
    for (let ch of str) {
        if (pair[ch]) {
            let lastChInStack = stack.pop();
            if (pair[ch] !== lastChInStack) {
                return 'Invalid';
            }
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0 ? 'valid': 'invalid';
}
