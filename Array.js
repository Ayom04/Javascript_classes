let programmingLanguages =   [
                                "python", 
                                "Golang", 
                                "javascript", 
                                "java",
                                "C",
                                "Ruby",
                                "Php",
                                "C#",
                                "C++",
                            
                            ]

console.log(programmingLanguages)

programmingLanguages[0] = "Git" // Changing the item of an array by its index
console.log(programmingLanguages)

popped = programmingLanguages.pop() // deleting an item from an array from behind
console.log(popped) // It prints out the deleted item from the array.

console.log(programmingLanguages) // it prints out the languages without the popped item

pushed = programmingLanguages.push("scala","fotran") // to add items to an array


console.log(programmingLanguages) // to print out the languages and the recently added ones.

console.log(programmingLanguages.length) // to print the number of items in an array

programmingLanguages.forEach( function (programmingLanguage, index) {
    console.log(index, programmingLanguage)
})

shifted = programmingLanguages.shift() // removing a value from the front
console.log(shifted)

unshifted = programmingLanguages.unshift("HTML", "CSS")
console.log(programmingLanguages)

let names = [
                'Abayomi Adewale',
                'Folarin Niyi',
                'Coker Aguda',
                'Ahmed Bola'
            ]
names.forEach(function (name,  index  ) {
    let item = name.split(' ')
    let firstChar = item[0].charAt(0).toUpperCase()
    let secondChar = item[1].charAt(0).toUpperCase()
    let result = firstChar + secondChar

    console.log(result, index)
})

let numbers = [132, 254, 343, 465, 565, 644, 7434, 83439, 9]
numbers.sort(function (a ,b) {
    return a - b
})