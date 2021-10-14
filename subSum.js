function subSum(arr, start, end) {

    if (Array.isArray(arr) === false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }

    let result = arr.reduce((result, n, i, arr) => numbersReducer(result, n, i, arr), 0);

    function numbersReducer(result, n, i, arr) {
        if(typeof(arr[i]) !== 'number') {
            return Number(arr[i]);
        }
        if (i >= start && i <= end) {
            result += n;
        }

        return result;
    }

    return result;

}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 4));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));