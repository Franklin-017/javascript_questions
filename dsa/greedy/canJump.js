function canJump(nums) {
    let farthest = 0, len = nums.length; 
    
    for(let ind=0; ind < len; ind++) {
        if (ind > farthest) return false;
        
        farthest = Math.max(farthest, ind + nums[ind]);
        
        if (farthest >= len-1) return true;
    }
    return false;
}

const nums = [1, 2, 0, 0, 5, 0];

console.log(canJump(nums));
