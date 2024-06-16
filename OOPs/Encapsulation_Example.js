class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        // Private property
        let mileage = 0;

        // Public method to get the mileage
        this.getMileage = function() {
            return mileage;
        };

        // Public method to drive the car and increase mileage
        this.drive = function(distance) {
            mileage += distance;
        };
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive(50);
console.log(myCar.getMileage());  // Output: 50
