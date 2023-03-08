

// 1.
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    let scores = games[i] //"1:1"
    let ourScore = scores.charAt(0) 
    let theirScore = scores.charAt(2)
    if (ourScore > theirScore){
      points += 3;
    } else if (ourScore === theirScore){
      points += 1
    }
  }
  return points
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))



// 2.
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
// function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount("Hello", "o"))
console.log(strCount("Hello", "l"))
console.log(strCount("", "z"))


function joinStrings(str1, str2) {
  const result = `${String(str1)} ${String(str2)}`;
  return result;
}


// 3.
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.


function joinStrings(str1, str2) {
  const result = `${String(str1)} ${String(str2)}`;
  return result;
}



console.log(joinStrings('string1', 'string2'))
console.log(joinStrings('testing', 'testing'))
console.log(joinStrings(134, 234))




// 4.
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
