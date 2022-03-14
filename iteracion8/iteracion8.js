1.8;
// const counterWords = [
//   "code",
//   "repeat",
//   "eat",
//   "sleep",
//   "code",
//   "enjoy",
//   "sleep",
//   "code",
//   "enjoy",
//   "upgrade",
//   "code",
// ];

// function repeatCounter(param) {
//   let numWoords = [];
//   for (let i = 0; i < param.length; i++) {
//     if (param[i] === numWoords) {
//       numWoords++;
//     }
//   }
// }
// repeatCounter(counterWords);
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  let numWords = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i] in numWords) {
      numWords[param[i]]++;
    } else {
      numWords[param[i]] = 1;
    }
  }
  return console.log(numWords);
}

repeatCounter(counterWords);
