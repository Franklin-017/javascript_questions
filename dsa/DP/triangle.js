function minimumTotal(triangle) {
    const memo = new Map();
    
    function solve(row, col) {
        const key = `${row}_${col}`;
        if (memo.has(key)) return memo.get(key);
        
        // If we are at last row, just return the value
        if (row === triangle.length -1) {
            return triangle[row][col]
        }
        
        const leftPath = solve(row+1, col);
        const rightPath = solve(row+1, col+1);
        
        const result = triangle[row][col] + Math.min(leftPath, rightPath);
        
        memo.set(key, result);
        return result;
    }
    return solve(0, 0);
}
