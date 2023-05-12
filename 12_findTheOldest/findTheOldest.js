const findTheOldest = function (array) {
  const d = new Date();
  let year = d.getFullYear();
  for (let i = 0; i < array.length; i++) {
    if (array[i].yearOfDeath == undefined) {
      array[i].age = year - array[i].yearOfBirth;
    } else {
      console.log(array[i].name);
      array[i].age = array[i].yearOfDeath - array[i].yearOfBirth;
    }
  }
  array = array.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
  });
  console.log(array);
  return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);
