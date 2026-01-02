if(true){
    let a = 10;
    var b = 20;
}
//console.log(a); // not accessible outside the block
console.log(b); // accessible outside the block

// TDZ (Temporal Dead Zone)
// console.log(let_before); // ReferenceError: before is not defined
let let_before = "hello";

console.log(var_before); // undefined
var var_before = "world";

// re-declaration
let x = 5 ;
// let x = 10; // SyntaxError: Identifier 'x' has already been declared

x=10;
console.log(x); // 10

/* 4. Global Object Pollution
If you declare a variable with var at the top of a script, it becomes part of the browser’s window object. let does not do this. It keeps the global scope clean. */