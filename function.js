// option 1
function isEven(number) {
      const isEven = number % 2 === 0;
      return isEven;
};

// option 2
function isOdd(number) {
      if (number % 2 !== 0) {
            return true;
      }
      else {
            return false;
      }
}

const evenResult = isEven(6);
// console.log(evenResult);

const oddResult = isOdd(6);
// console.log(oddResult);

// for a given string tell me whether it has even number of character or not
function isEvenCharacter(string) {
      // console.log(string.length);
      if (string.length % 2 !== 1) {
            return true;
      }
      return false;
}

const evenChartResult = isEvenCharacter('kamruzzaman');
// console.log(evenChartResult);

// write a function. given an array argument. then return the sum of the array elements

function sumOfArrayElements(arr) {
      let sum = 0;

      for (let element of arr) {
            // console.log(element);
            sum += element;

      }
      return sum;
};

// console.log('Sum of the array is: ',sumOfArrayElements([1, 2, 3, 4, 5]));

// create a function that will return sum of even numbers

function sumOfEvenNumbers(numbers) {
      let sum = 0;
      for (number of numbers) {
            if (number % 2 !== 1) {
                  sum += number;
            }
      }
      return sum;
}

console.log('Sum Of even Numbers:', sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7]));