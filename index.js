"use strict";
// Basic Tyles
let age = 29;
let course = "Typescript";
let lessonCompleted = true;
let x = 12;
//Arrays
let courses = ["HTML", "CSS", "Typescript"];
let arr = [true, '123', 321];
let stringArray = [['a'], ['b']];
let testing = true;
// Tuples
let person = ["John", 25];
let people = [
    ["Alex", 18],
    ["John", 26]
];
// Objects
let student = {
    name: "Emmanuel",
    age: 14,
    isPassing: true
};
let student1 = {
    name: "Alex",
    age: 17,
    isPassing: false
};
let student2 = {
    name: "Jnr",
    age: 25,
    isPassing: true
};
// Unions
let result = "John";
result = 25;
let johnIsPassing = "passed";
// Type Assertion
let y = "Hello";
y = 25;
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
function greet() {
    console.log("hello");
}
//Generics
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3]);
// Enums
var Grade;
(function (Grade) {
    Grade["freshman"] = "First Year student in High scheel";
    Grade["sophmore"] = "Second Year student in High scheel";
    Grade["junior"] = "Third Year student in High scheel";
    Grade["senior"] = "Fourth Year student in High scheel";
})(Grade || (Grade = {}));
function displayStudentInfo(student) {
    const studentInfo = student.name + " \n " + student.age + " \n" + student.grade;
    document.body.innerHTML = studentInfo;
}
displayStudentInfo({
    name: "John",
    grade: Grade.junior
});
