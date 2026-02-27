function maximumSumSubArray(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0, start = 0, end = 0;
    
    while(end < arr.length) {
        if (end - start < k) {
            windowSum += arr[end];
            end++;
        } 
        
        if (end - start === k) {
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= arr[start];
            start++;
        }
    }
    return Math.max(maxSum, 0);
}
