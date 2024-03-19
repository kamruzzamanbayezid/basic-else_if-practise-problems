/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

for (let i = 1; i <= 200; i++) {

      // option1
      // console.log(i);
      if (i === 100) {
            break;
      }

      // option2
      // if (i > 100) {
      //       break;
      // }
      // console.log(i);
}

/*
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let number = 1;
// let sum = 0;
// while (number < 100) {
//       // console.log(number);
//       sum = sum + number;

//       if (sum >= 100) {
//             break;
//       }
//       number++;
// }
// console.log(sum);

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let square = 1;
while (square <= 100) {
      // console.log(Math.sqrt(square));
      if (Math.sqrt(square) % 1 === 0) {
            console.log(`The first square number is: ${square}`);
            break;
      }
      square++;
}

// console.log(Math.sqrt(6)); // 5
// console.log(Math.sqrt(120)); // 10.954451150103322
// console.log(Math.round(Math.sqrt(120))); // 11

// for (let i = 1; i <= 100; i++) {
//       // console.log(Math.sqrt(i));
//       if (Math.sqrt(i) % 1 === 0) {
//             console.log("First square number encountered:", i);
//             break;
//       }
// }
