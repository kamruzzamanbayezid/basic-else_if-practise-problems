

// for (let num = 0; num < 10; num++) {
//       console.log(num);
// }

// 1-10 porjonto jor songkha
let sumOfOdd = 0;
for (let i = 0; i <= 10; i++) {
      // console.log(i);
      if (i % 2 === 0) {
            // console.log(i);
            sumOfOdd += i;
      }
}

// console.log(sumOfOdd);

for (let roastDibo = 1; roastDibo < 10; roastDibo++) {
      // console.log(`Roast Dibo ami: ${roastDibo}`);
}

// sum of 11-20
let sum = 0;
for (let i = 11; i <= 20; i++) {
      // console.log(i);
      sum += i;
}
// console.log('Total is: ',sum);

// give me the list of numbers 1 to 30 divisible by 5
for (i = 1; i <= 30; i++) {
      if (i % 5 === 0) {
            console.log(i);
      }
}


// give me sum of number 1-30 that is divisible by 3
let divisibleSum = 0;
for (let i = 1; i <= 30; i++) {
      if (i % 3 === 0) {
            // console.log(i);
            divisibleSum += i;
      }
}
// console.log('Total: ',divisibleSum);

/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
 */

// const number = 5;

// for (let i = 1; i <= 10; i++) {
//       // console.log(i);

//       let result = number * i;

//       console.log(`${number} * ${i} = ${result}`);
// }

const number = 3;

for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
}

// for (let i = 1; i <= 10; i++) {
//       // console.log(i);

//       const result = number * i;

//       console.log(`${number} * ${i} = ${result}`);
// }
