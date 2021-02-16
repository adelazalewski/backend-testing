// name function based on test
const removeSalaries = salaries => {
    //create an empty array
    const higherSalaries = [];
    //use conditional logic to add salaries to the new array
    for (x in salaries) {
      if (salaries[x] < 50000) {
        higherSalaries.append(salaries[x]);
      }
    }
    // return new array
    return higherSalaries;
  };

  module.exports = removeSalaries