const arr = [1,2,3];
const arr1 = [...arr,4,5];
// console.log(arr1)


const user = {
  name: "Zain",
  skills: ["HTML", "CSS"]
};

// Spread for object + spread for nested array
const newUser = {
    ...user,
  skills: [...user.skills, "JavaScript"]
};
// console.log(user.skills , newUser.skills);
const sumArr = [1,5,[8]];

function Sum(x,y,z){
  return x+y+z ;
}

console.log(Sum(...sumArr.flat())) ;