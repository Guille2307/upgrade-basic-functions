//1.2

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestword = param[0];
  for (let index = 1; index < param.length; index++) {
    if (param[index].length > longestword.length) {
      longestword = param[index];
    }
  }
  return console.log(longestword);
}
findLongestWord(avengers);
