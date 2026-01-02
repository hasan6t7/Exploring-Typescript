"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    speed;
    year = 2021;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(` ${this.brand} car is moving ${this.speed} km/h`);
    }
}
class ElectricCar extends Car {
    charge() {
        console.log(`${this.brand} ${this.year} car is charging`);
    }
}
const tesla = new ElectricCar("Tesla", 65);
tesla.move();
tesla.charge();
//# sourceMappingURL=vehicle.js.map