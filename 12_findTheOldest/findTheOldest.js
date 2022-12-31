const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    if (getAge(person) > getAge(oldest)) {
      oldest = person;
    }
    return oldest;
  }, people[0]);
};

function getAge(person) {
  if ('yearOfDeath' in person) {
    return person.yearOfDeath - person.yearOfBirth;
  }
  return (new Date()).getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
