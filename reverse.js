// const sentence = 'I am a Student';
// let reverse = '';

// for (let letter of sentence) {
//       // console.log(letter);
//       reverse = letter + reverse
// }

// console.log(reverse);

// let a = 'a';
// let b = 'b';
// console.log(a + b);

let sentence = 'I want to be a developer';
let reverse = '';

// for (let i = 0; i < sentence.length; i++) {
//       let letter = sentence[i];

//       reverse = letter + reverse
// }

let i = 0;
while (i < sentence.length) {
      let letter = sentence[i];
      reverse = letter + reverse
      i++;
}

console.log(reverse);