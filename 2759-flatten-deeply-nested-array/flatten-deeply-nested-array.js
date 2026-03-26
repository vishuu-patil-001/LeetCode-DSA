var flat = function(arr, n) {
    let result = [];

    function helper(curr, depth) {
        for (let item of curr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    }

    helper(arr, 0);
    return result;
};