//object type
const shoe = {
  brand: "Converse", //string for name
  laces: true, //boolean
  velcro: false, //boolean
  color: "Green", //string
  price: 1000000,
  activityTypes: ["Life Style", "Casual", "Formal", "Skating", "Walking"], //Array
  materials: ["Canvas", "Cotton", "Rubber", "Suede"],
};

console.log(shoe.brand);
console.log(shoe.color);
console.log(shoe.activityTypes);

//update object properties
const car = {
  color: "blue",
  brand: "Honda",
  trim: "sport",
  weight: "1577kg",
};
//change object in table
car["color"] = "red";

//delete opbject properties
console.table(car);
const car = {
  color: "red",
  brand: "Honda",
  trim: "sport",
  weight: "1577kg",
};
//remove object from table
delete car["trim"];

console.table(car);

//adding object properties
const car = {
  color: "blue",
  brand: "Honda",
  trim: "sport",
};
//add property to table
car.weight = "1577kg";

console.table(car);
