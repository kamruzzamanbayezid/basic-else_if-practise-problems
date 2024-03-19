// Access the golden rod color value in output.

const colors = {
      red: "#ff0000",
      green: "#00ff00",
      blue: "#0000ff",
      "golden rod": '#daa520'
};

// console.log(colors['golden rod']);

// For this object below add a property named passenger capacity with value 5

const car = {
      make: "Toyota",
      model: "Corolla",
      year: 2020
};

car.passenger_name = 5;

// console.log(car);

// Display the physics marks as output.

const students = {
      name: "Hamim Sakep",
      id: 5421,
      physics: {
            subject: "HSC Physics",
            author: "Shahjahan Tapan",
            marks: 30
      }
};

// console.log(students.physics.marks);

// Count the number of properties.

let student = {
      name: 'Ariana Grande',
      age: 21,
      city: 'Gaibandha',
      isStudent: true
};

const properties = Object.keys(student);
// console.log(properties.length);

// Loop through an object and print the key - value pairs with their types

let myObject = {

      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
};

for (object in myObject) {
      const property = myObject[object];

      const typeOfValues = typeof (property);

      console.log(object, ':', property, '|', 'type:', typeOfValues);
}