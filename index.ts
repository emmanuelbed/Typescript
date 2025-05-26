// Basic Tyles

let age:number = 29
let course: string = "Typescript"
let lessonCompleted: boolean = true
let x: any = 12

//Arrays
let courses: string[] = ["HTML", "CSS", "Typescript"]
let arr: any[] = [true, '123', 321]

let stringArray: string[][] = [['a'], ['b']]

let testing: boolean = true


// Tuples
let person: [string, number] = ["John", 25]
let people: [string, number][] = [
    ["Alex", 18],
    ["John", 26]
]

// Objects
let student: {
    name: string,
    age: number,
    isPassing: boolean
} = {
    name: "Emmanuel",
    age: 14,
    isPassing: true
}

// Custom Types
type Student = {
    name: string,
    age: number,
    isPassing: boolean
}

let student1: Student = {
    name: "Alex",
    age: 17,
    isPassing: false
}

// Interfaces
interface Student1 {
    name: string,
    age: number,
    isPassing: boolean
}

let student2: Student1 = {
    name: "Jnr",
    age: 25,
    isPassing: true
}


// Unions
let result: string | number = "John"
result = 25

type isPassing = "passed" | "failed"
let johnIsPassing: isPassing = "passed"



// Type Assertion
let y: any = "Hello"
y = <number> 25


// Functions
function sum(num1: number, num2: number): number {
    return num1 + num2
}

sum(1, 2)


function greet(): void{
    console.log("hello");
    
}
//Generics
function getFirstElement <ArrayType> (arr: ArrayType[]){
    return arr[0]
}

getFirstElement<number>([1,2,3])


// Enums
enum Grade {
    freshman = "First Year student in High scheel",
    sophmore ="Second Year student in High scheel",
    junior = "Third Year student in High scheel",
    senior = "Fourth Year student in High scheel"
}

interface StudentObject{
    name: string,
    age: number,
    grade: Grade
}


function displayStudentInfo(student: StudentObject): void{
    const studentInfo: string = student.name + " \n " + student.age + " \n" + student.grade

    document.body.innerHTML = studentInfo
}

displayStudentInfo({
    name:"John",
    age: 25,
    grade: Grade.junior
})
