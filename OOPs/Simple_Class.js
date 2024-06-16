// Define a class
class Person {
    // Constructor method to initialize new objects
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to display information
    describe() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Create an instance (object) of the Person class
const john = new Person('John', 30);
john.describe();  // Output: Name: John, Age: 30

const jane = new Person('Jane', 25);
jane.describe();  // Output: Name: Jane, Age: 25
