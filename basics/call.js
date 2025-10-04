"use strict";
// non data type strict example
// you must delclare variable data type before use
  const x = 3;
 console.log(x);

 // function this example 
 // In the global context (outside of any function), 'this' refers to the global object (window in browsers, global in Node.js).
 // In a regular function, 'this' refers to the global object (or undefined in strict mode).
 // In an arrow function, 'this' retains the value of the enclosing lexical context's 'this'.
 function myfunction(){
    console.log(this);
 }
 myfunction(); 