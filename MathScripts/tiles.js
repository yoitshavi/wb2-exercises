//100 square ft room

var squareFootRoom = 100
var numTiles = squareFootRoom / 12


var percent10 = numTiles * .1

var totalTiles =Math.ceil(numTiles) + Math.ceil(percent10)

console.log(totalTiles)


