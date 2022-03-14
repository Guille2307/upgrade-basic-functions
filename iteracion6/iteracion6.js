1.6;
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
let food = [];
duplicates.forEach((typefood) => {
  if (!food.includes(typefood)) {
    food.push(typefood);
  }
});
console.log(food);
