function Vehicle (make, mode) {
  this.make = make;
  this.model = model;
}

Vehicle.sayHi = sayHi;
Vehicle.prototype.deets = deets;

function sayHi() {
  console.log("Hello.")
}

function deets() {
  console.log(`Make: ${this.make} Model: ${this.model}`)
}

Vehicle.sayHi()

const car = new Vehicle("Toyota", "Corolla");
car.deets();

class Vehicle2 {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  static sayHi() {
    console.log("Henlo");
  }

  deets() {
    console.log(`Make: ${this.make} Model: ${this.model}`)
  }
}

Vehicle2.sayHi()

const car2 = new Vehicle2("Toyota", "Corolla");
car2.deets();

class Truck extends Vehicle2 {
  constructor(make, model, type) {
    super(make,model);
    this.type = type;
  }

  deets() {
    console.log(`Make: ${this.make} Model: ${this.model} Type: ${this.type}`)
  }
}

Truck.sayHi()

const car2 = new Truck("Ford", "F-150", "4x4");
car2.deets();