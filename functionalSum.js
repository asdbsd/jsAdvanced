function functionalSum(n) {
    let sum = 0;
    function add(n) {
        sum += n;
        return add;
    }

    add.toString = () => {
        return sum;
    }

    return add(n);
}


console.log(functionalSum(1)(6).toString())