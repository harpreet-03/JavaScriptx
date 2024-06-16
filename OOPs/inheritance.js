// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor
    }
    
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Rex');
myDog.speak();  // Output: Rex barks.
