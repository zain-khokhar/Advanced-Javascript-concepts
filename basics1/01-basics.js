// conept of this keyword
const user = {
    name : "zain",
    age:20,
    salaries: function(){
      //  console.log(this.age);
      return this 
    }
    
}
console.log(user.salaries());
// method chaining
const User1 = {
  name:"zain",
  garde: 12,
  getName: function(){
    console.log(`your name is ${this.name}`);
    return this
  },
  getGrade: function(){
    console.log(`your grade is ${this.garde}`);
    return this
  },
  updateName: function(newName){
    this.name = newName;
    console.log(`your new name is ${this.name}`);
    return this
  }

}
console.log(User1.getName().getGrade().updateName('ali'));
