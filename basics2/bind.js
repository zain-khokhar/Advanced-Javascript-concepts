// =========================================
// 🔹 Understanding JavaScript bind() Method
// =========================================

// ✅ The 'user' object with a 'name' property and a 'showName' method
const user = {
    name: 'Zain',
    showName() {
        console.log(this.name);
    }
};

// ------------------------------------------------------
// ❌ BEFORE using bind() → 'this' reference gets lost
// ------------------------------------------------------

// Here we are assigning the method to another variable (function reference)
const unboundCopy = user.showName;

// When called directly, 'this' no longer refers to the 'user' object
// so the output will be: undefined
unboundCopy(); // Output: undefined

// ------------------------------------------------------
// ✅ AFTER using bind() → 'this' permanently linked to 'user'
// ------------------------------------------------------

// bind() creates a new function with 'this' locked to the 'user' object
const copy = user.showName.bind(user);
const copy1 = user.showName.bind(user);

// Now both functions remember that 'this' === 'user'
copy();   // Output: Zain
copy1();  // Output: Zain

// ------------------------------------------------------
// 🧠 Summary:
// - 'bind()' is used to permanently fix 'this' to a specific object.
// - Without bind(), when you assign a method to a variable, 
//   'this' loses its original reference.
// - With bind(), the function always knows which object it belongs to.
// ------------------------------------------------------
