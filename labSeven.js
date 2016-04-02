var groceryList = [
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

var total = 0;

groceryList.forEach(function(item) {
	console.log(item.name + ": $" + item.price);
	total += item.price;
});

console.log("TOTAL: $" + total.toFixed(2));