var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {

        let partition1 = Math.floor((left + right) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        let minRight1 = partition1 === m ? Infinity : nums1[partition1];

        let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        let minRight2 = partition2 === n ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {

            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }

        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
};