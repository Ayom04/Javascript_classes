// 1. The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune 
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be an X in Y, and married to Z with N kids."

// Where X is the job title , Y is the location , Z is the partners name, and N is the number of children

// Call that function 3 times with 3 different values for the arguments.
function tellFortune(jobTitle, location, partnersName, noOfChildren) {
    let work = "You will be a " + jobTitle + " at "+ location + " .You will be married to "+ partnersName + " with " + noOfChildren +" children"
    return work 
  }
  console.log (tellFortune("software developer", "maryland", "Elizabeth", 7))
  console.log (tellFortune("Bricklayer", "Ondo", "Esther", 2))
  console.log (tellFortune("Bank manager", "Abuja", "Shewa", 1))
// 2. The Puppy Age Calculator

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 parameter: puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

function calculateDogAge(humanAge){
    let dogAge = humanAge / 7
    return dogAge
}
console.log (calculateDogAge(21))
console.log (calculateDogAge(35))
console.log (calculateDogAge(7))

// 3. The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favourite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for the rest of the life .
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

function calculateSupply(age ,  amountPerDay){
let output = age * amountPerDay
let result = "You will need " + "$" + output + " to last you until the ripe old age of "  + age
return result
}
console.log(calculateSupply(32, 700))
console.log(calculateSupply(54, 100))
console.log(calculateSupply(65, 7000))
// 4. The Geometrizer

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius and output. "The circumference is NN."
// Also, create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius and output. "The area is NN."
function calcCircumfrence(radius){
    let circumference = 2 * 3.14 * radius
    return circumference
}
console.log(calcCircumfrence(10))
console.log(calcCircumfrence(7))
console.log(calcCircumfrence(12))

function calcArea(radius){
    let area = radius *radius * 3.14 
    return area
}
console.log(calcArea(10))
console.log(calcCircumfrence(7))
console.log(calcCircumfrence(12))

// 5. The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(x){
    let fahrenheit = x * 9/5 + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(38))
console.log(celsiusToFahrenheit(45))


// Create another function called fahrenheitToCelsius:
function fahrenheitToCelsius(x){
    let celsius = (x-32) * 5/9
    return celsius
}
console.log(fahrenheitToCelsius(32))
console.log(fahrenheitToCelsius(64))
console.log(fahrenheitToCelsius(128))
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// ***you can Google formular to calculate fahrenheit to celsius and vice versa

