function listOfNames(names) {
    let sorted = [];
    names.sort((a,b) => a.localeCompare(b)).forEach((person, i) => {
        sorted.push(`${i + 1}.${person}`);
    });

    return sorted.join('\n');
}


console.log(listOfNames(
    ["John", "Bob", "Christina", "Ema"]
));
console.log('---------')
