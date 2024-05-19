const findTheOldest = function(people) {
    let oldestPerson = people[0];
    if (!oldestPerson.yearOfDeath) {
        let currentYear = new Date().getFullYear();
        oldestPerson.yearOfDeath = currentYear;
    }
    let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

    for(let i = 1; i < people.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        if(age > oldestAge) {
            oldestPerson = people[i];
            oldestAge = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;