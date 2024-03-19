// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(typeof(cars));

// let num = 45 ;
// let newNum = new Number(num)
// console.log(typeof newNum);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const d = fruits.toSorted()
// console.log(d);
// console.log(fruits);
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
const slice = array2.slice(0, 3)

// console.log(slice);
// console.log(array2);
// console.log(array2.indexOf(2));

const find = array2.findIndex(arr => arr > 5)
// console.log(find);

const temp = [27, 28, 30, 40, 42, 45, 35, 30];
// console.log(Math.max.apply(null, temp));
const findLast = temp.findLast(tem => tem > 40)
// console.log(findLast);
// temp.sort(() => (a, b) => {
//       return a - b
// })
// console.log(temp);

const sort = temp.sort(function (a, b) {
      return b - a
})

// console.log(sort);

const persons = [
      { name: 'kalu', age: 20 },
      { name: 'malu', age: 22 },
      { name: 'alu', age: 42 }
];

const result = persons.sort(function (a, b) {
      return a.age - b.age
})

// console.log(result);

let age = 18;

// if (age > 20) {
//       console.log("You'r adult");
// }
// else {
//       console.log("You're Voira");
//}

switch (age) {
      case 18:
            console.log('You are adult');
            break;
      default:
            console.log('kire picchi');
}
