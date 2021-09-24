function townsToJSON(elements) {
    let match = /\|/g;
    let headings = elements.shift().replace(match, '')
                    .split(' ')
                    .filter((element) => element == '' ? element.trim() : element);

    

    let parsedElements = elements.reduce(parseElements, []);

    function parseElements(collection, e) {
        let obj = {}
        e = e.split('|')
            .filter((element) => element == '' ? element.trim() : element);
        
        let [city, latitude, longitude] = [...e] 
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        obj[headings[0]] = city.trim();
        obj[headings[1]] = Number(latitude);
        obj[headings[2]] = Number(longitude);

        collection.push(obj);

        return collection;
    }

    return JSON.stringify(parsedElements);
}

console.log(townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
      '| Beijing | 39.913818 | 116.363625 |'
    ]
));
console.log('------------')

console.log(townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ]
));