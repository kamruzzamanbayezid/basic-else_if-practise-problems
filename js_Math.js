// console.log(Math.round(4.5));


// 1-10 porjonto random integer
// console.log(Math.floor(Math.random() * 10));

// This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
}

// console.log(getRndInt(1, 10));

// This JavaScript function always returns a random number between min and max (both included):

// function getRndInteger(min, max) {
//       return Math.floor(Math.random() * (max - min + 1) + min);
// }


console.log(getRndInt(1, 10));