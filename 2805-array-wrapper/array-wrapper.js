var ArrayWrapper = function(nums) {
    this.nums = nums;
};

// For + operator
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0);
};

// For String() conversion
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(",")}]`;
};