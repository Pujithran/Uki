const hello = (name, age) =>
  console.log(`Hello ${name}! you are ${age} years old`);

hello("Paul", 19);

// GPT Practice

// Q1

const greet = () => console.log("Hello");

greet();

// Q2

const sayName = (name) => console.log(`${name}`);

sayName("Pujithran");

// Q3

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(5, 3));

// Q4

const square = (num) => {
  return num ** 2;
};

console.log(square(4));

// Q5

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5));

// Answer is 20

// Q6

const cube = (num) => {
  return Math.pow(num, 3);
};

console.log(cube(4));

// Q7

const isEven = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Not Even";
  }
};

console.log(isEven(5));

// Q8

const subtract = (num1, num2) => {
    sub = num1 - num2
    return sub
}

console.log(subtract(3,2))

// Q9

const fullName = (firstName, lastName) => {
    fName = firstName + " " +lastName
    return fName
}

console.log(fullName("Paul", "Rajeevan"))

// Q10

const largest = (num1, num2, num3) => {
    larg = num3

    if(num1 > num2){
        if(num1 > num3){
            larg = num1
        }
        else{
            larg = num3
        }
    }
    else {
        if(num2 > num3){
            larg = num2
        }
    }
    

    return larg
}

console.log(largest(7,10,5))

// Q11

const numbers = [1, 2, 3 ,4 ,5]

const doubled = numbers.map((number) => {
    return number * 2
})

console.log(doubled)

// Q12

const plusOne = numbers.map((number) => {
    return number + 1 
})

console.log(plusOne)

// Q13

const names = ["John", "Alex", "Sam"];

const greetName = names.map((name) => {
    return "Hello "+name
})

console.log(greetName)

// Q14

const squareNumber = numbers.map((number) => {
    return Math.pow(number,2)
})

console.log(squareNumber)

// Q15

const namess = ["pujithran", "john", "alex"];

const upperName = namess.map((name) => {
    return name.toUpperCase()
})

console.log(upperName)

// Q16

