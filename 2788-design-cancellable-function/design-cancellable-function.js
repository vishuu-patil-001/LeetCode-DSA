/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
    let cancel;
    const cancelPromise = new Promise((_, reject) => {
        cancel = () => reject("Cancelled");
    });

    // We wrap the generator execution in an async IIFE to return a promise
    const mainPromise = (async () => {
        let nextValue;
        let isError = false;
        let isCancelled = false;

        // Helper to trigger the "Cancelled" state
        const triggerCancel = () => {
            isCancelled = true;
            isError = true;
            nextValue = "Cancelled";
        };

        // Initial call to start the generator
        let result = generator.next();

        while (!result.done) {
            try {
                // We race the yielded promise against the cancel function
                // If cancel() is called, the catch block triggers immediately
                const val = await Promise.race([result.value, cancelPromise]);
                nextValue = val;
                isError = false;
            } catch (e) {
                // If the yielded promise rejects OR cancel() was called
                nextValue = e;
                isError = true;
                if (e === "Cancelled") isCancelled = true;
            }

            // Feed the result (or error) back into the generator
            if (isError) {
                result = generator.throw(nextValue);
            } else {
                result = generator.next(nextValue);
            }
            
            // If we were cancelled and the generator didn't catch it/finished, 
            // the loop will end or re-throw in the next iteration.
        }

        return result.value;
    })();

    return [cancel, mainPromise];
};