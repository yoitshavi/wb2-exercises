var numPeople = 38
var vanSeats = 15
var cost = 250

var vansNeed = Math.ceil(numPeople / vanSeats)

var costPerPerson = Math.ceil(cost * vansNeed / numPeople)

console.log(vansNeed)
console.log('$',costPerPerson)