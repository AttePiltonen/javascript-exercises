const findTheOldest = function(people) {
    people = people.map(person => {
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        return {
            ...person,
            age // Use the shorthand property name for age: age
        };
    }).sort((a, b) => b.age - a.age);
    
    return people[0]; // Return the entire object of the oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
