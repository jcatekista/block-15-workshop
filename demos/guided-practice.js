//guided practice
//object = dinner
const dinner = {
  //food types(keys/property) and price(values)
  hamburger: 12,
  steak: 20,
  soup: 8,
  "Mac And Cheese": 14,
  "Soup And Salad": 16,
};
//print array of different foods
console.log(Object.keys(dinner));
//print array of prices
console.log(Object.values(dinner));
//calculate total cost
const prices = Object.values(dinner);
let totalCost = 0;
//calculation of values
for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}
//print total cost
console.log(totalCost);
