let student={
    name:"Aarav",
    age:20,
    course:"B.Tech CSE",
    subjects:["DSA","Web Dev","Math"],
    isEnrolled:true
}

console.log(student);
console.log("name",student.name);
console.log("age",student.age);
console.log("second subject",student.subjects[1]);


let keyName="course";
console.log("course is",student[keyName]);
student.graduationYear=2026;
student.age=22;
delete student.name;
console.log(student);
