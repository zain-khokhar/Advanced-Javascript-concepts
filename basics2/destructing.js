const arr = [1,2,3,4,5643,432,23,21,21,12,3,123,3];
const  [a,b] = arr;
// console.log(a) // 1
// use of rest operator with array 
const [c,...restValues] = arr;
// console.log(restValues);

// rest operator with object 
const person = {
  name: "Ali",
  age: 25,
  gender: "male",
  city: "Karachi",
  profession: "developer"
};
const {name,...all}= person;
// console.log(all);

// destructing with nested objects

const user = {
  id: 1,
  name: "Ali",
  address: {
    street: "Street 5",
    one:{
        work:"op"
    },
    city: "Karachi",
    country: "Pakistan"
  },
  contact: {
    email: "ali@example.com",
    phone: "03001234567"
  }
};

const {address:{one:{work}}} = user;
console.log(work);