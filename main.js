//using .length
let cars = ["Ford", "Mercedes", "Toyota", "Kia"]
console.log(cars.length)

//
let moreCars = ["Audi", "Hyundai", "Tesla", "Honda"]

totalCars = moreCars.concat(cars)
console.log(totalCars)

console.log(totalCars.indexOf("Honda"))

console.log(totalCars.lastIndexOf("Ford"))

let stringOfCars = totalCars.join
console.log(stringOfCars)

//split
let carsFromString = stringOfCards.split(",")
console.log(carsFromString)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort()
console.log(carsInReverse.indexOf('yourPrediction'))

let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4, 5)
console.log(pets)

let removedReptiles =  pets.splice(4, 2, "hamster")
console.log(removedReptiles)

let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push(removedPet)
console.log(pets)

pets.shift()
console.log(pets)

pets.unshift("turtle")
console.log(pets)

let sum = 0;
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(addTwo)

function addTwo(item) {
    sum + 2;
  }
console.log(numbers)

