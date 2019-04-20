//conditional structures
var buySoda = false
var buyBeer = false
var buyNaturalJuice = false

var conviction = {
	nome: 'pedro',
	age: '18',
	drinkBeer: true,
	drinkSoda: false
}

if (conviction.drinkSoda) {
	buySoda = true

} else if (conviction.drinkBeer && conviction.age >= 18) {
	buyBeer = true
} else {
	buyNaturalJuice = true
}

console.log(buySoda)