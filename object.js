const pen = {
      brand: 'Econo',
      price: 5,
      color: 'red',
};
// console.log(pen['brand']);

for (property in pen) {
      console.log(property, ':', pen[property]);
}

// const propertyName = Object.keys(pen);
// const propertyValues = Object.values(pen);

// for (let i = 0; i < propertyName.length; i++) {
//       const properties = propertyName[i];
//       const values = propertyValues[i];

//       console.log(properties, ':', values);
// }

const person = {
      name: "John",
      age: 30,
      city: "New York"
}
// console.log(JSON.stringify(person));

const obj = {
      name: 'John',
      age: 30,
      greet: function () {
            console.log('Hello!');
      }
};

// obj.greet = obj.greet.toString();

// const jsonString = JSON.stringify(obj);
// console.log(jsonString);
console.log(obj);

const pet = {
      firstName: 'Jerry',
      lastName: 'Kery',
      eyeColor: 'blue',
      get fullName() {
            return `${this.firstName} ${this.lastName}`
      }
}

console.log(pet.fullName);

