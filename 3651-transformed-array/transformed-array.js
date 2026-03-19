var constructTransformedArray = function(nums) {
    let n = nums.length;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = nums[i];
        } else {
            let newIndex = ((i + nums[i]) % n + n) % n; // safe modulo
            result[i] = nums[newIndex];
        }
    }

    return result;
};