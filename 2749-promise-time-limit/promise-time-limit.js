var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            
            // Timer Promise
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Function execution
            fn(...args)
                .then((res) => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};