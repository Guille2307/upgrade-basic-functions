//1.4
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  for (let index = 0; index < param.length; index++) {
    sum += param[index];
  }
  return console.log(sum / param.length);
}
average(numbers);
