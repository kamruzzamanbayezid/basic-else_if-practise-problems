/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */

let repeat = 1;

while (repeat <= 60) {
      // console.log(repeat);
      // console.log(`I will invest at least 6 hrs every single day for next 60 days! ${repeat}`);
      repeat++;
}

/***
Find all the odd numbers from 61 to 100.
 */
let oddNumber = 61;

while (oddNumber <= 100) {

      if (oddNumber % 2 === 1) {
            // console.log(oddNumber);
      };

      oddNumber++;
}


/***
Find all the even numbers from 78 to 98.
 */

let evenNumber = 61;

while (evenNumber <= 100) {

      if (evenNumber % 2 === 0) {
            // console.log(evenNumber);
      };

      evenNumber++;
}

/***
Display sum of all the odd numbers from 81 to 131.
 */
let sumOfOddNumber = 81;
let total = 0;

while (sumOfOddNumber <= 131) {
      if (sumOfOddNumber % 2 === 1) {
            // console.log(sumOfOddNumber);
            total = total + sumOfOddNumber;
      }
      sumOfOddNumber++;
}
// console.log('Sum of Odd numbers: ', total);


/***
Display sum of all the even numbers from 206 to 311.
 */

let sumOfEvenNumber = 81;
let sum = 0;

while (sumOfEvenNumber <= 131) {
      if (sumOfEvenNumber % 2 === 1) {
            // console.log(sumOfEvenNumber);
            sum = sum + sumOfEvenNumber;
      }
      sumOfEvenNumber++;
}
// console.log('Sum of Even numbers: ', sum);

let array = ['cat', 'car', 'cow'];
let newArray = "";

for (arr of array) {
      // console.log(arr);
      newArray = newArray + arr;
}

// console.log(newArray);

// let num = 1;

// do {
//       console.log(num);
//       num++;
// }
// while (num < 10)

let x = 5;

do {
      // console.log(x);
      x++;

}
while (x > 20);

// give me the list of numbers 1 to 30 divisible by 5

// let i = 1;
// while (i <= 30) {
//       if (i % 5 !== 1) {
//             console.log(i);
//       }
//       i++;
// }

// multiplication of 5;
const number = 5;

let i = 1;
while (i <= 10) {
      const result = number * i;
      // console.log(`${number} x ${i} = ${result}`);
      i++;
}