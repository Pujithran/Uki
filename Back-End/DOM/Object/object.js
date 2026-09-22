const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,

    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: () => {console.log("I'm eating a krabby patty")}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,

    sayHello: () => {console.log("Hey, I'm Patrick...")},
    eat: () => {console.log("I'm eating a pizza")}

}

// person1.eat()


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = () => console.log(`You drive ${this.model}`)
}

const car1 = new Car("Ford", "Mustang", 2024, "Red")

const car2 = new Car("Chevorlet", "Camero", 2025, "Blue")

const car3 = new Car("Dodge", "Charger", 2026 , "Silver")

console.log(car1.make)

car1.drive()