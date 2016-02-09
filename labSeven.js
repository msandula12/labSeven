var groceryList  = [
	{
		name: "milk",
		price: 2.79
	},
	{
		name: "bread",
		price: 3.49
	},
	{
		name: "bananas",
		price: 3.19
	},
	{
		name: "chicken breasts",
		price: 11.42
	},
	{
		name: "yogurt",
		price: 5.69
	}
];

for (var item in groceryList) {
	console.log(groceryList[item].name);
	console.log(groceryList[item].price);
}

var total = 0;
for (var p in groceryList) {
		total += groceryList[p].price;
}

console.log("Total: " + total.toFixed(2));