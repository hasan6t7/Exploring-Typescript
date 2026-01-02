interface Vehicles {
  brand: string;
  speed: number;
  move: () => void;
}

class Car implements Vehicles {
  protected year = 2021;
  constructor(public brand: string, public speed: number) {}
  move(): void {
    console.log(`${this.brand} car is moving ${this.speed} km/h`);
  }
}

class ElectricCar extends Car {
  charge(): void {
    console.log(`${this.brand} ${this.year} car is charging`);
  }
}

const tesla = new ElectricCar("Tesla", 65);
tesla.move()
tesla.charge();
