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
