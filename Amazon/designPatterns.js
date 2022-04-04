// Null Object Pattern

// Below code is NOT using Null Object Pattern

class User {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  printName() {
    // In printName() we need to explicitly handle case where name is undefined
    if (this.name !== undefined) console.log(`User's name is ${this.name}`);
    else console.log(`User Name undefined`);
  }
}

let validUser = new User("John", "25", "1");
let nullUser = new User();

console.log(validUser); // returns object with name John and age 25
console.log(nullUser); // returns object with name undefined and age undefined

validUser.printName();
nullUser.printName();

// Using Null Object Pattern

// Create a seperate null user class

class ValidUser {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  printName() {
    console.log(`User's name is ${this.name}`);
  }
}

class NullUser {
  constructor() {
    this.name = "Null User";
    this.age = "-1";
    this.id = "-1";
  }

  printName() {
    console.log(`User does not have a name it is undefined.`);
  }
}

function createUser(name, age, id) {
  if (name || age || id) return new NullUser();
  return new ValidUser(name, age, id);
}

let valid = createUser("Chin", 25, 1);
let invalid = createUser();

valid.printName();
invalid.printName();
