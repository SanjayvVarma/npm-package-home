const arrayEnhancer = {
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
    clearDuplicates: arr => [...new Set(arr)],
    filterByType: (arr, type) => arr.filter(item => typeof item === type),
    reverse: arr => arr.reverse(),
    sortNumeric: arr => arr.sort((a, b) => a - b),
    unique: arr => [...new Set(arr)],
    chunk: (arr, size) => arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []),
    flatten: arr => arr.flat(Infinity),
    rotate: (arr, positions) => [...arr.slice(positions), ...arr.slice(0, positions)],
    mapAndFlatten: (arr, fn) => arr.map(fn).flat(),
};

module.exports = arrayEnhancer;