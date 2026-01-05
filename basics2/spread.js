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

// more tricky problem for spread operators
const profile = {
  name: "Zain",
  projects: [
    { title: "Portfolio", tech: ["HTML", "CSS"] },
    { title: "App", tech: ["JS", "React"] }
  ]
};

const newProf = {
    ...profile,
    
}
// console.log(newProf);