function heroicInventory(wariors) {
    let result = [];
    for(let warior of wariors) {
        let [name, level, items] = warior.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : []

        result.push({
            "name": name,
            "level": level,
            "items": items
        });
    }

    return JSON.stringify(result);
}


console.log(heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]

));
console.log('------------')

console.log(heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
));