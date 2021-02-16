const help = require("./helpers");

describe('helpers module', () => {
    //arrange
    describe("sum function", () => {
        //here we describe what the function can do = act
        it("can add 2 numbers", () => {
            const expectedOutput = 7;
            const actualOutput = help.sum(2, 5);
            //create an assertion
            expect(actualOutput).toBe(expectedOutput)
        });

        it("can add 3 numbers", () => {
            const expectedOutput = 7;
            const actualOutput = help.sum(2, 3, 2);
            //create an assertion
            expect(actualOutput).toBe(expectedOutput)
        })
    });

    //arrange
    
        describe("averageTestScore", () => {
            //.todo indicates that we dont wnat our code to run yet but to keep note od it instead 
        //   it.todo("should calculate the average for an array of numbers");

        //act
        it("should calculate the average for an array of numbers", () => {
            const scores = [2,4,6,6,2];
            const average = help.averageTestScore(scores);
            //assertion
            expect(average).toBe(4);
        });
      
          it.todo("should throw an error if the argument is not an array", () => {
            expect(() => { averageTestScore(5) }).toThrow();
            expect(() => { averageTestScore("five and two") }).toThrow();
            expect(() => { averageTestScore({ number: 5 }) }).toThrow();
            expect(() => { averageTestScore(undefined).toThrow();
            expect(() => { averageTestScore(null).toThrow();
            expect(() => { averageTestScore(NaN).toThrow();
          });

        });
    
});


