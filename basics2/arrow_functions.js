// relation between this and arrow functions

const obj = {
    Value: 45,
    getValue : function(){
        console.log(this); // refers to obj
        const arrowFunc = ()=>{
            console.log(this.Value); // refers to obj.Value
        }
        arrowFunc();
    }
}

// obj.getValue(); // 45
// console.log(this); // refers to global object (window in browsers, global in Node.js)

// parameters in arrow functions


const odd = (n) => {
    console.log(this); // refers to global object
    return n % 2 !== 0;
}

console.log(odd(6)); // false
console.log(odd(7)); // true