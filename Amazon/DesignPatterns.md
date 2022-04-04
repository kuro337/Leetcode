<link href="../StudyPlan1_DS/style.css" rel="stylesheet" />
<h1>Design Patterns in JS </h1>

<br/>

<ul>

<li> Reusable patterns to common problems faced in Software Engineering. It is a formalization of different best practices. </li>
<li><k>Null Object Design Pattern</k>  </li>
<li> Instead of returning a null object and checking if it is null before doing operations on it every time, return an object with some default values as if it were a null object. </li>

</br>

```
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


```

</br>

<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>

</ul>
