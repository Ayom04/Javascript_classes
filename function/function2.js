// 1. Return the Sum of Two Numbers. 
// Write a function that takes two numbers as arguments and returns their sum.
// samples below
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10
function sumOf2Numbers(num1,num2){
    return sum = num1 + num2
}
console.log(sumOf2Numbers(3,2))
console.log(sumOf2Numbers(-3,-6))
console.log(sumOf2Numbers(7,3))

// 2. Return the Next Number from the Integer Passed
// Write a function that takes a number as an argument, increases the number by 1 and returns the result.
// samples below
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2 
function nextNumber(number){
    return number + 1
}
console.log(nextNumber(0))
console.log(nextNumber(10))
console.log(nextNumber(-2))

// 3. Convert Age to Days
// Write a function that takes the age in years and returns the age in days.
// samples below
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300
function calcAge(ageInYear){
    let noOfDaysInAYear = 365
    return ageInYear * noOfDaysInAYear
}
console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))
// 4. Power Calculator
// Write a function that takes voltage and current and returns the calculated power. NB: power = voltage * current
// samples below
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600
function powerCalculator(voltage, current){
    let power = voltage* current
    return power
}
console.log(powerCalculator(230,10))
console.log(powerCalculator(110,3))
console.log(powerCalculator(480,20))

// 5. Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// sample below
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"
function giveMeSomething(something){
    return "something " + something
}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("something"))
// 6. Concatenate First and Last Name into One String
// Write a function that takes 2 parameters firstName and lastName, return a single string in the format "last, first."
// sample below
// concatName("Johnny", "Bravo") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"
function concatName(lastName, firstName){
    return "\"" +lastName + ", " +firstName + "\""
}
console.log(concatName("Johnny", "Bravo"))
console.log(concatName("John", "Doe"))
console.log(concatName("Mary", "Jane"))

// 7. Return the Remainder from Two Numbers
// Write a function that takes two numbers as arguments and returns the remainder of the first number divided by the second number.
// sample below
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
function remainder(num1, num2){
    return num1 % num2
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))

// 8. Return Negative
// Write a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
// sample below
// returnNegative(4) ➞ -4
// returnNegative(15) ➞ -15
// returnNegative(-4) ➞ -4
// returnNegative(0) ➞ 0
function returnNegative(positivenum){
    return positivenum * -1
}
console.log(returnNegative(4))
console.log(returnNegative(15))
console.log(returnNegative(0))

// 9. String and Number Conversions
// Write a function that takes a string and returns it as an integer.
// sample below
// intToString(4) ➞ "4"
// stringToInt("4") ➞ 4
function numberToString(valueInNumber){
    return String(valueInNumber)

}
console.log(numberToString(4))
function stringToNumber(valueInString){
    return Number(valueInString)
}
console.log(stringToNumber("4"))


// 10. Four Passengers and a Driver (Here a bit problem solving, you have to think of the solution before you code)
// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
// sample below

// carsNeeded(5) ➞ 1
// carsNeeded(11) ➞ 3
// carsNeeded(0) ➞ 0
function carsNeeded(passengers, car){
    return Math.ceil(passengers/5)
}
console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))

// 11. Return the Total Number of Parameters (Here's another bit of problem solving)
// Write a function that returns the total number of parameters passed in.
// sample below
// numberArgs("a", "b", "c") ➞ 3
// numberArgs(10, 20, 30, 40, 50) ➞ 5
// numberArgs(x, y) ➞ 2
// numberArgs() ➞ 0
function numberArgs(){
    return arguments.length 
}
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
console.log(numberArgs("x", "y"))
console.log(numberArgs())
// 12. WordCharWord
// Write a function that takes 2 argument. The function will put the first argument(that should be a character), in the begining and the end of the second argument, a string.
// sample below
// wordCharWord("R", "javascript is fun") ➞ "R javascript is fun R"
// wordCharWord("#", "hello world!") ➞ "# hello world! #"
// wordCharWord("his", "lets jump on code ") ➞ "# lets jump on code #"
function charWordChar(character, word){
    return character + word + character
}
console.log(charWordChar("R", " javascript is fun ", " R"))
console.log(charWordChar("#", " hello world!", " #"))
console.log(charWordChar("his", " lets jump on code ", " R"))

// 13. Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
// sample below
// stutter("incredible") ➞ "eerrm... errrm... incredible?"
// stutter("enthusiastic") ➞ "eerrm... eerrm... enthusiastic?"
// stutter("outstanding") ➞ "eerrm... eerrm... outstanding?"
function slutterFirst2Letters(wordToBeSlutteerd){
    return "eerrmm... " + "eerrmm... " + wordToBeSlutteerd + " ?"
}
console.log(slutterFirst2Letters("incredible"))
console.log(slutterFirst2Letters("enthusiastic"))
console.log(slutterFirst2Letters("outstanding"))
// 14. Write a funtion that returns the type of a parameter passed to it.
// sample below
// typeOf(1) ➞ "number"
// typeOf("a") ➞ "string"
// typeOf("The man ran away") ➞ "string"
function typeOfParameterPassed(character){
    return typeof(character)
}
console.log(typeOfParameterPassed(1))
console.log(typeOfParameterPassed('a'))
console.log(typeOfParameterPassed("The man ran away"))



// 15. Write a function that takes a number as an argument and returns the square root of that number.
// sample below
// squareRoot(9) ➞ 3
// squareRoot(16) ➞ 4
// squareRoot(25) ➞ 5
function helloWorld(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return "Hello World"
    } else if(number % 3 === 0) {
        return "Hello"
    } else if(number % 5 === 0) {
        return "World"
    } else {
        return "Not a multiple of 3 or 5"
    }
  }
  console.log(helloWorld(15))
  console.log(helloWorld(5))
  console.log(helloWorld(3))
