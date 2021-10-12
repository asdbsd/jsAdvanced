function filterEmployees(data, criteria) {
    let [criteriaKey, criteriaValue] = criteria.split('-')
    let isAll = criteria == 'all'

    const myEach = (person, i) => console.log(`${i}. ${person.first_name + ' ' + person.last_name} - ${person.email}`);

    isAll ? JSON.parse(data).forEach(myEach) : JSON.parse(data)
                                            .filter(person => person[criteriaKey] == criteriaValue).forEach(myEach);
}

filterEmployees(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`, 
    'gender-Female'
    
)