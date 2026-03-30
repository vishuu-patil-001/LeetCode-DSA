var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;

        functions.forEach((fn, index) => {
            fn()
                .then((val) => {
                    results[index] = val;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
};