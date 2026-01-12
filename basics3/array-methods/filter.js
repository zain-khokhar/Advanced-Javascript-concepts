
// // Professional practice: reduce method examples

// // Example 1: Sum of numbers in an array
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log('Sum:', sum); // Output: Sum: 15

// // Example 2: Grouping items by property
// const people = [
// 	{ name: 'Ali', age:20 },
// 	{ name: 'Sara', age: 22 },
// 	{ name: 'Ahmed', age: 20 },
// 	{ name: 'Zain', age: 22 }
// ];
// const groupedByAge = people.reduce((acc, person) => {
// 	acc[person.age] = acc[person.age] || [];
// 	acc[person.age].push(person.name);
// 	return acc;
// }, {});
// console.log('Grouped by age:', groupedByAge);

// word counter 
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counter = words.reduce((acc, value) => {
    acc[value] = (acc[value] || 0 )+ 1;
    return acc;
}, {});

console.log(counter);
