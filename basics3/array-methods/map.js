grades = "B";
const students = [
  { name: "Ali", marks: [80, 75, 90] },
  { name: "Sara", marks: [60, 65, 58] },
  { name: "Ahmed", marks: [90, 92, 88] },
  { name: "Zain", marks: [40, 45, 50] }
];

const studentsWithGrades = students.map(student => {
  // Use map to iterate and sum marks 
  let sum = 0;
  student.marks.map(mark => {
    sum += mark;
    return null; // map requires a return value, but we ignore it
  });
  const averageMarks = parseFloat((sum / student.marks.length).toFixed(2));
  let grade = "";

  if (averageMarks >= 85) {
    grade = "A";
  } else if (averageMarks >= 70) {
    grade = "B";
  } else if (averageMarks >= 50) {
    grade = "C";
  } else {
    grade = "D";
  }

  return {
    name: student.name,
    averageMarks,
    grade
  };
});

console.log(studentsWithGrades );