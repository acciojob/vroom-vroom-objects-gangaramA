function Car(make, model) {
  // Store the make and model in the Car object
  this.make = make;
  this.model = model;
}

// Add the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to inherit its properties
  Car.call(this, make, model);

  // Store the topSpeed in the SportsCar object
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;