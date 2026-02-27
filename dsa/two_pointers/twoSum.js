function twoSumSortedArray(nums, target) {
    let start = 0, end = nums.length - 1 ;
    
    while(end > start) {
        let sum = nums[start] + nums[end];
        if (sum === target) {
            return [nums[start], nums[end]];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    
    return -1;
}
