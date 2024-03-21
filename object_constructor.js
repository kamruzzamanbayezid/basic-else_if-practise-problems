function Person(firstName, lastName, age) {
      this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.fullName = function () {
                  return `${this.firstName} ${this.lastName}`
            }

}

// const bayezid = new Person('Kamruzzaman', 'Bayezid', 23);
const kamal = new Person('Kamal', 'Hossen', 33);
console.log(kamal);