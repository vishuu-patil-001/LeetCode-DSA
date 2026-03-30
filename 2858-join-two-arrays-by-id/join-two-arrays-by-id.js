var join = function(arr1, arr2) {
    const result = {};

    for (const obj of arr1) {
        result[obj.id] = obj;
    }

    for (const obj of arr2) {
        if (result[obj.id]) {
            result[obj.id] = { ...result[obj.id], ...obj };
        } else {
            result[obj.id] = obj;
        }
    }

    return Object.values(result).sort((a, b) => a.id - b.id);
};