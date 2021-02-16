exports.sum = function (...args) {
    return args.reduce((acc, e) => acc + e)
}
exports.averageTestScore = function (testScores) {
    let totalSumScores = 0;
  let numberOfScore = 0;

  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }

  return totalSumScores / numberOfScore;
}