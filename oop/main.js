

////////////////Object Oriented Programming Intro 
/*
// until now we did this..
//The way we've created modular code up to now is by wrapping things inside a function, like this:
const SomeModule = function(){

    const _somethingPrivate = 3
    const exposePrivates = () => _somethingPrivate
  
    return 
      {
        exposePrivates: exposePrivates
      }
  }
//  to access that, we'd do :
const m = SomeModule()
console.log(m.exposePrivates()) //prints 3


 *Encapsulation is exactly what we've been doing with modules so far 
 - closing off certain pieces of code for modularization and to limit who can access what 
(i.e. _private variables cannot be accessed outside of the module, unless it's through a function)


// Classes & Instantiation
class Animal {   //each object have a name and a numLegs-these are the class attributes(a.k.a properties).
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs

    }
}

const whale = new Animal ("humpback whale", 0) //INSTANTIATION

//Spot check 1
const dog = new Animal ("lux" ,4)
console.log(dog.name)

//Spot Check 2
class Human {
    constructor(name, age ,isFriendly) {
        this.name = name,
        this.age = age,
        this.isFriendly= isFriendly
    }

}

const h1 = new Human ("Rico", 33, true)
console.log(h1)
console.log(`${h1.name}, who is ${h1.age} years old, is ${h1.isFriendly ? 'friendly' : 'not friendly'}`)
 //prints "Rico, who is 33 years old, is friendly"

 //Methods
 class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){ // a method is just a function in an object
        //console.log("Boom. Birthed " + name)
        this.children.push  (name)
    }
}
const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly") // prints "Boom. Birthed Dolly"

//Spot Check 3
const cat = new Animal()
cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]

//Spot Check 4

class Vehicle {
    constructor(x, y, speed) {
        this.x = x;
        this.y= y;
        this.speed= speed;
        Vehicle.carsSold++;        
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        const income = this.carsSold * 30000
        console.log(`Made ${income} dollars`)
    }
}
Vehicle.carsSold = 0;
//Prototype & Static Methods

const fCar = new Vehicle ("the x", "the y", 100)
const sCar = new Vehicle ("an x", "an y", 200)
const tCar = new Vehicle ("another x", "another y", 150)
//Spot Check 5
console.log(fCar)
console.log(sCar)
Vehicle.getInfo()
Vehicle.calculateMoney()
*/
//GETTER & SETTER (NOT MANDATORY)
class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed; // shouldn't be directly accessed (private)
        this._fuel = fuel;
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed(){
        return this._speed
    }

    set fuel(fuel){
        if( 0 > fuel || fuel > 150 ){
            console.log("fuel must be between 0 and 150")
        }else { this._fuel=fuel}
    }
    get fuel(){
        return this._fuel
    }
}
const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
c.speed = 10
console.log(c.speed) // prints undefined
console.log(c)

// Spot Check 6
c.fuel= 20
console.log(c.fuel)

// Object Oriented Programming

class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"
    