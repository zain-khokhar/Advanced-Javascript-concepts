
// Array destructuring
const arr = [1, 2, 3, 4, 5643, 432, 23, 21, 21, 12, 3, 123, 3];
const [a, b] = arr;
// console.log(a); // 1

// Use of rest operator with array
const [c, ...restValues] = arr;
// console.log(restValues);

// Object destructuring with rest operator
const person = {
  name: "Ali",
  age: 25,
  gender: "male",
  city: "Karachi",
  profession: "developer",
};
const { name, ...all } = person;
// console.log(all);

// Destructuring with nested objects
const user = {
  id: 1,
  name: "Ali",
  address: {
    street: "Street 5",
    one: {
      work: "op",
    },
    city: "Karachi",
    country: "Pakistan",
  },
  contact: {
    email: "ali@example.com",
    phone: "03001234567",
  },
};
const {
  address: {
    one: { work },
  },
} = user;
// console.log(work);

// Change property name of objects during destructuring
const { id: identity, contact: number } = user;
console.log(user.contact);
console.log(number);

// Destructuring with default values
const user1 = {
  id: 1,
  name: "Ali",
};
const { pass = "jakj33989" } = user1;
console.log(pass);

// Binding in object destructuring
let abc;
({ abc } = { abc: 5 });
console.log(abc);

// Destructuring in function parameters
function desFunc({ name }) {
  console.log(name);
}
desFunc(user); // define the object which key name used in params

// Dynamic keys use case with destructuring
const key = "z";
const { [key]: value } = { z: "zain" };
console.log(value);