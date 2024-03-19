// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversedColors = [];

for (color of colors) {
      reversedColors.unshift(color)
}

// console.log(reversedColors);

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumber = [];

// for (let number of numbers) {
//       if (number % 2 === 0) {
//             evenNumber.push(number)
//       }
// }

// console.log(evenNumber);

// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = '';

for (number of numbers) {
      string += number;
}
// console.log(string);

// Reverse the words of a sentence.Only the position of the word will be reversed.check out the output :'person working hard a am I';

const statement = 'I am a hard working person';
let splitStatement = statement.split(' ').reverse().join(' ');
console.log(splitStatement);