//object set to customer
const customer = {
  //keys:value
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
//log to check info
console.table(customer);
//correct email
customer["email"] = "Jak3Smith1992@email.com";
//correct number
customer["phone"] = 3195551234;
//log to check updates
console.table(customer);
//correct zipcode
customer["zipCode"] = "63132";
//add flavors
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
//log to check all correct info
console.table(customer);

//delete zipCode and favoriteStore
delete customer["zipCode"];
delete customer["favoriteStore"];
//log to check properties removed
console.table(customer);

//add new keys and values
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

//log to check keys added
console.table(customer);

//print keys of survey
console.log(Object.keys(customer));
