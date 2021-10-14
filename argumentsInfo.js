function argumentsInfo(...params) {
    let occurances = {};
    let result = [];

    params.forEach(element => {
        let type = typeof(element);
        result.push(`${type}: ${element}`);
        occurances[type] = occurances[type] ? ++occurances[type] : 1
    });

    Object.keys(occurances)
    .sort((a,b) => occurances[b] - occurances[a])
    .forEach(key => result.push(`${key} = ${occurances[key]}`));

    return result.join('\n')
}

console.log(argumentsInfo('cat', 42, function () { console.log('Hello world!'); }, 'asdas', 'asgas'));