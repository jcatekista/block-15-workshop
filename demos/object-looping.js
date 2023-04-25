const myBike = {
  tire: true,
  spokes: true,
  inflated: false,
  handlebar: true,
  condition: "fair",
};
for (const property in myBike) {
  console.log(property);
} // shows us our properties

for (const property in myBike) {
  console.log(myBike[property]);
} // shows property values

console.log(Object.keys(myBike));
//shows properties in an array

console.log(Object.values(myBike));
//shows value of properties in array
