//Problem 01
type Array<T> = T[];
const filterEvenNumbers = (arr: Array<number>): Array<number> => {
  return arr.filter((num) => num % 2 === 0);
};

//Problem 02
const reverseString: (str: string) => string = (str: string) => {
    return str.split("").reverse().join("");
};

//Problem 03
type StringOrNumber = string | number;
const checkType =(value: StringOrNumber): string=>{
    if(typeof value === "string"){
        return "String";
    }
    return "Number";
}
const result1 = checkType("Hello");
const result2 = checkType(42);

//Problem 04

type User ={
    name: string;
    id: number;
    age: number;
    email: string;
}
const user: User = {
    name: "Alif",
    id: 122,
    age: 25,
    email: "alif@example.com"
};
const getProperty = <X>(obj: X , key: keyof X) => {
    return obj[key];
};

//Problem 05
type Books = { title: string; author: string; publishedYear: number };
const myBook: Books = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (book: Books): object => {
  return {
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    isread: true
  }
}

//Problem 06
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}
const student1 = new Student("Alif", 25, "A");
student1.getDetails()

//Problem 07
const getIntersection = (arr1: Array<number>, arr2: Array<number>)=>{
     return arr1.filter(num => arr2.includes(num));
}