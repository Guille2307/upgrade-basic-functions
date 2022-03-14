1.7;

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

function repeatCounter(param, item) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === item) {
      return console.log(true, i);
    } else {
      console.log(false);
    }
  }
}

repeatCounter(counterWords, "code");
