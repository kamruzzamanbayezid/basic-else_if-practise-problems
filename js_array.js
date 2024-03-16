// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(typeof(cars));

// let num = 45 ;
// let newNum = new Number(num)
// console.log(typeof newNum);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof(fruits.toString()));
// console.log(typeof(fruits));
// console.log(fruits.length);
// console.log(fruits.sort());

// fruits[fruits.length] = 'Tango';
fruits[7] = 'Jango'

// console.log(fruits[5]);


const num = [2, 4, 6, 9, 7]
// console.log(num.sort());

const points = [40, 40, 45];
// console.log(num.concat(points));

// console.log(Array.isArray(points));
// console.log(fruits instanceof Array);

// console.log(points.toString());

const arr1 = ['banana', 'apple']
const arr2 = ['banana', 'apple']
const arr3 = ['banana', 'apple']

// console.log(arr1.concat(arr2,arr3));

const array = [1, 2, 3, 4, 5, 6, 7];
array.copyWithin(3, 2, 3);

// console.log(array); 

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
// console.log(newArr);

const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2.splice(0, 2, 1, 2));