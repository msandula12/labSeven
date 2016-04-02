groceryList = [
	name: "milk"
	price: 2.79
,
	name: "bread"
	price: 3.49
,
	name: "bananas"
	price: 3.49
,
	name: "chicken breasts"
	price: 11.42
,
	name: "yogurt"
	price: 5.69
]

total = 0

groceryList.forEach (item) ->
	console.log item.name + ": $" + item.price
	total += item.price

console.log "TOTAL: $" + total.toFixed(2)