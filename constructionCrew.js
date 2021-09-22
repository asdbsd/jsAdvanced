function constructionCrew(obj) {
    let isDizzy = obj.dizziness;

    if (!isDizzy) {
        return obj;
    } else {
        obj.levelOfHydrated += (0.1 * obj.weight * obj.experience)
        isDizzy = false;
        obj.dizziness = false;
    }

    return obj;
}

console.log(constructionCrew(
    { weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true 
    }
));
console.log('------------------')

console.log(constructionCrew(
    { weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true 
    }
      
));
console.log('------------------')

console.log(constructionCrew(
    { weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false 
    }
));
console.log('------------------')

