// Take four parameters. Multiply the four numbers and then return the result

function multiplyNumbers(num1, num2, num3, num4) {
      return num1 * num2 * num3 * num4;
}

// console.log(multiplyNumbers(2, 2, 2, 2));

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isOdd(number) {
      if (number % 2 !== 0) {
            return 'Odd Number';
      }
      return 'Even Number';
}

// console.log(isOdd(2));

// Write a function called make_avg() which will take an [2, 4, 4, 6] of integers and the size of that array and return the average of those values.

function make_avg(arr) {
      let sum = 0;
      for (let element of arr) {
            sum += element;
      }

      const arrLength = arr.length;
      const average = sum / arrLength;
      return average;
}

// console.log('Average: ', make_avg([2, 4, 4, 6]));

// Write a function called count_zero() which will take a binary string(Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
      let binaryArr = [];

      for (let binary of binaryString) {
            if (binary === '0') {
                  // console.log(binary);
                  binaryArr.push(binary);
            }
      }
      return binaryArr.length;
}

const zeroCount = count_zero('0101001100');
// console.log("Number of 0's:", zeroCount);


// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number) {
      if (number % 2 === 0) {
            return 'Even';
      }
      return 'Odd';
}

console.log('The number is: ', odd_even(4));

