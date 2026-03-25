Array.prototype.groupBy = function(fn) {
    let result = {};

    for (let item of this) {
        let key = fn(item);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item);
    }

    return result;
};