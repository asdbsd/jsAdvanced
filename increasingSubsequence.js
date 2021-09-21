function increasingSubsequence(elements) {
    let collection = elements;
    
    let result = collection.reduce((acc, n, i) => {
        if (i === 0 || n >= acc[acc.length - 1]) {
            acc.push(n);
            return acc;
        } else {
            return acc;
        }
    }, []);


    return result;
}

console.log(increasingSubsequence([1,
    3,
    8,
    4,
    8,
    10,
    12,
    3,
    2,
    24]
));

console.log(increasingSubsequence([1,
    2,
    3,
    4]
));

console.log(increasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))

console.log(increasingSubsequence([]));