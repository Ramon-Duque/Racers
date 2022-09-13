import { GasCar } from "../src/GasCar";

describe("Racer and GasCar", () => {
   test("The team and fuel properties are set from the constructor parameters", () => {
             const car = new GasCar("Gas", 20);
     expect(car).toEqual({"fuel": 20, "speed": 0, "team": "Gas"});
   });
   test("fuel defaults to 10, when the second constructor parameter is omitted", () => {
       const car = new GasCar("Gassy");
expect(car.fuel).toEqual(10);
});
test("The speed property starts at 0", () => {
   const car = new GasCar("Gassy");
expect(car.speed).toEqual(0);
});
test("Calling accelerate once brings speed to 2", () => {
   const car = new GasCar("Gassy");
   car.accelerate();
expect(car.speed).toEqual(2);
});
test("Calling accelerate twice brings speed to 4", () => {
   const car = new GasCar("Gassy");
   car.accelerate();
   car.accelerate();
expect(car.speed).toEqual(4);
});
test("Calling accelerate once reduces fuel by 1", () => {
   const car = new GasCar("Gassy");
   car.accelerate();
expect(car.fuel).toEqual(9);
});
test("Calling accelerate twice reduces fuel by 2", () => {
   const car: GasCar = new GasCar("Gassy");
   car.accelerate();
   car.accelerate();
expect(car.fuel).toEqual(8);
});
test("isFuelEmpty returns true when fuel is 0", () => {
   const car: GasCar = new GasCar("Gassy", 0 );
   
expect(car.isFuelEmpty()).toBe(true);
});
test("isFuelEmpty returns false when fuel is greater than 0", () => {
   const car: GasCar = new GasCar("Gassy" );
   
expect(car.isFuelEmpty()).toBe(false);
});
});