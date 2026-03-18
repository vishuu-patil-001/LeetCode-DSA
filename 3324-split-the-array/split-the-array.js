var isPossibleToSplit = function(nums) {
    let freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > 2) return false;
    }

    return true;
};