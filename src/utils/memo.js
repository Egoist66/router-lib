export function memo(func) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            //console.info('cache hit')
            return cache.get(key);
        }

        const result = func.apply(this, args);
        cache.set(key, result);
        // console.info('cache init')
        return result;
    };
}