# TypeScript Assignment 01

This repository contains solutions to several basic TypeScript problems covering topics like functions, arrays, union types, generics, interfaces, classes, inheritance, and array operations.

---

# Technologies Used

* TypeScript
* Node.js

---

# Problem 01: Filter Even Numbers

This function filters all even numbers from an array.

```ts
type Array<T> = T[];

const filterEvenNumbers = (arr: Array<number>): Array<number> => {
  return arr.filter((num) => num % 2 === 0);
};
```

---

# Problem 02: Reverse a String

This function reverses a string.

```ts
const reverseString: (str: string) => string = (str: string) => {
  return str.split("").reverse().join("");
};
```

---

# Problem 03: Check Data Type

This function checks whether a value is a string or a number.

```ts
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
};
```

---

# Problem 04: Generic Property Access

This function uses TypeScript Generics and `keyof` to safely access object properties.

```ts
type User = {
  name: string;
  id: number;
  age: number;
  email: string;
};

const user: User = {
  name: "Alif",
  id: 122,
  age: 25,
  email: "alif@example.com"
};

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
```

---

# Problem 05: Toggle Read Status

This function adds a read status to a book object.

```ts
type Books = {
  title: string;
  author: string;
  publishedYear: number;
};

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
  };
};
```

---

# Problem 06: Class and Inheritance

This example demonstrates class inheritance in TypeScript.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    );
  }
}

const student1 = new Student("Alif", 25, "A");
student1.getDetails();
```

---

# Problem 07: Array Intersection

This function returns the common elements between two arrays.

```ts
const getIntersection = (
  arr1: Array<number>,
  arr2: Array<number>
) => {
  return arr1.filter(num => arr2.includes(num));
};
```

---

# How to Run the Project

## Install TypeScript

```bash
npm install -g typescript
```

## Compile TypeScript File

```bash
tsc index.ts
```

## Run JavaScript File

```bash
node index.js
```

---

# Author

Yasir Arafat Alif
