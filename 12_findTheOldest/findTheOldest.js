const getAge = function(person) {
    return (person.hasOwnProperty('yearOfDeath') ? (person['yearOfDeath'] - person['yearOfBirth']) : (new Date().getFullYear() - person['yearOfBirth']));
};

const findTheOldest = function(people) {
    const oldest = people.reduce((acc, next) => {

        return (getAge(acc) < getAge(next) ? next : acc);
    }, {yearOfBirth: new Date().getFullYear()});

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
