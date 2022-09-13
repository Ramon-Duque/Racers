import { Racer } from "../src/Racer";
import { SolarCar } from "../src/SolarCar";

test("sets team prop, speed starts at 0, call accerlerate +1", ()=> {

   const car:SolarCar = new SolarCar("Sun-Car")
   car.accelerate()
   car.accelerate()
   car.isFuelEmpty()
   const result = car.isFuelEmpty()
   expect(car.speed).toEqual(2)
   expect(car.team).toBe("Sun-Car")
   expect(result).toBeFalsy()
})