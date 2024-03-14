const price = 10000;
const age = 20;

if (age <= 12) {
      // console.log('Free entry and free food');
}
else if (age <= 20) {
      // discount 5%
      const discount = (10000 * 5) / 100
      const payablePrice = price - discount;
      // console.log(payablePrice);
}
else {
      // console.log(price);
}


// Grading || result
const result = 50;
let grade;

if (result >= 90) {
      grade = "Golden A+"
}
else if (result >= 80) {
      grade = "A+"
}
else if (result >= 70) {
      grade = "A"
}
else if (result >= 60) {
      grade = "A-"
}
else if (result >= 50) {
      grade = "B"
}
else if (result >= 40) {
      grade = "C"
}
else if (result >= 33) {
      grade = "D"
}
else if (result < 33) {
      grade = "F"
}

console.log(`Your result is: ${result}. You are getting ${grade}`);
