const BurgerPrice = 600;

if (BurgerPrice > 500) {
      // console.log('You will get free coke');
}
else {
      // console.log('You should pay 30 tk for the coke');
}

/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

const weight = 55;
const height = 1.5;

const BMI = weight / (height) ^ 2

if (BMI < 18.5) {
      // console.log('You are Underweight');
}
else if (BMI >= 18.5 && BMI <= 24.9) {
      // console.log('You are normal');
}
else if (BMI >= 25 && BMI <= 29.9) {
      // console.log('You are overweight');
}
else {
      // console.log('You are obese');
}


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const marks = 80;
const friendsMark = 40;

// if (friendsMark >= 80) {
//       console.log('We will go for a lunch');
// }
// else if (friendsMark < 80 && friendsMark >= 60) {
//       console.log('Better luck next time');
// }
// else if (friendsMark < 60 && friendsMark >= 40) {
//       console.log('I can not seen your message');
// }
// else {
//       console.log('You blocked!!');
// }

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 4;
const num2 = 5;

let result;

// if (num1 > num2) {
//       console.log(num1 * 2);
// }
// else {
//       console.log(num1 + num2);
// }

result = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(result);


/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrise = 800;
const age = 80;
const isStudent = true;

if (age < 10) {
      console.log('Your entry is free');
}
else if (isStudent) {
      console.log((ticketPrise * 50) / 100);
}
else if (age >= 60) {
      let discount = ((ticketPrise * 15) / 100);
      console.log(ticketPrise - discount);
}
else {
      console.log(ticketPrise);
}