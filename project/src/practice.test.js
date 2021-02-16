const salaries = require("./practice");

describe("removeSalaries", () => {
    it("should return an array of shorter length", () => {
      // assertions and matchers here
      const salaries = [50000, 45000, 60000];
        expect(removeSalaries(salaries).toHaveLength(1));
    });
});



