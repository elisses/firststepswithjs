//work with while

var convictions = [
	{
		name: 'Pedro',
		age: '20',
		drinkBeer: true,
		drinkSoda: false
	},
	{
		name: 'Maria',
		age: '17',
		drinkBeer: false,
		drinkSoda: true
	},
	{
		name: 'João',
		age: '19',
		drinkBeer: true,
		drinkSoda: true
	}
]

var buyBeer = false

console.log(convictions.length)

var i = 0

while ( i < convictions.length) {
	console.log(convictions[i].name,convictions[i].drinkBeer)
	if(convictions[i].drinkBeer){
		buyBeer = true
		break
	}
	i++
}

console.log(buyBeer)