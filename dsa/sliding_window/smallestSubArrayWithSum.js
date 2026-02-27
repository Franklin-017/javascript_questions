function smallestSubArrayWithSum(arr, target) {
    let windowSum = 0;
    let start = 0;
    let minLength = Infinity;
    
    for (let end =0; end < arr.length; end++) {
        windowSum += arr[end];
        
        while(windowSum >= target) {
            const currentWindowLength = end - start + 1;
            minLength = Math.min(currentWindowLength, minLength);
            windowSum -= arr[start];
            start++;
        }
    }
    
    return minLength !== Infinity? minLength: 0;
}