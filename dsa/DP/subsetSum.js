function canSum(target, nums) {
    const memo = new Map();
    
    function solve(index, currentTarget) {
        const key = `${index}_${currentTarget}`;
        
        if(memo.has(key)) return memo.get(key);
        
        if (currentTarget === 0) return true;
        if (currentTarget < 0 || index >= nums.length) return false;
        
        const include = solve(index+1, currentTarget - nums[index])
        const exclude = solve(index + 1, currentTarget);
        
        const result = include || exclude;
        
        memo.set(key, result);
        return result;
    } 
    return solve(0, target);
}
