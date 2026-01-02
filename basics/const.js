// const property cannot be reassigned
//  const a ; // ❌ SyntaxError: Missing initializer in const declaration
const a = 10 ; // ✅  right syntax for initializing a const variable

// reassigning a const variable

// a = 20 ; // ❌ TypeError: Assignment to constant variable.

console.log(a) ; // 10

// const with objects and arrays

const obj = {name:"john"};
obj.name = "doe";
console.log(obj.name) ; // doe

const arr = [1,2,3,4];
arr.push(5);
console.log(arr) ; // [1,2,3,4,5]

// const with primitive data types

const str = "hello";
// str[0] = "H" ; // ❌ TypeError: Cannot assign to read only property '0' of string 'hello'
console.log(str) ; // hello
