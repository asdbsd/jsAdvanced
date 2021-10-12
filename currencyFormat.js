function createCurrencyFormater(separator, symbol, isTrue, func) {
    let currentSeparator = separator;
    let currentSymbol = symbol;
    let isTrueValue = isTrue;    

    function returnedFunc(value) {
        return func(currentSeparator, currentSymbol, isTrueValue, value)
    }

    return returnedFunc;


}

const currencyFormatter = (separator, symbol, symbolFirst, value) => {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}



let newFormater = createCurrencyFormater(',', '$', true, createCurrencyFormater);
console.log(newFormater(5345));