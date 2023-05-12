const findTheOldest = function (array) {
  array = array.sort((a, b) => {
    if (a.yearOfBirth < b.yearOfBirth) {
      return -1;
    }
  });
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
