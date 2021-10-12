function commandProcessor() {
    let result = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(str) {
        result += str;
    }

    function removeStart(nChars) {
        result = result.slice(nChars);
    }

    function removeEnd(nChars) {
        result = result.slice(0, -nChars)
    }

    function print() {
        console.log(result);
    }

}

let myProcessor = commandProcessor();

myProcessor.append('first');
myProcessor.append('first');
myProcessor.removeEnd(3);
myProcessor.removeStart(1);
myProcessor.print();

