import { findRacersWithEmptyFuel } from "../src/racer-fucntions";
import { GasCar } from "../src/GasCar"
import { SolarCar } from "../src/SolarCar"
import { Racer } from "../src/Racer"

describe("test racer fuel array", () => {
    test("Do a test case with an array of GasCar where some have no fuel", () => {
      const gasCar1 = new GasCar("Blue", 5)
      const gasCar2 = new GasCar("Red", 10)
      const gasCar3 = new GasCar("Black", 0)
      const gasCar4 = new GasCar("Green", 0)
      const carArray = [gasCar1, gasCar2, gasCar3, gasCar4];

      expect(findRacersWithEmptyFuel(carArray)).toEqual([gasCar3, gasCar4])

    })
    test("Do a test case with an array of GasCar where all have no fuel", () => {
        const gasCar1 = new GasCar("Blue", 0)
        const gasCar2 = new GasCar("Red", 0)
        const gasCar3 = new GasCar("Black", 0)
        const gasCar4 = new GasCar("Green", 0)
        const carArray = [gasCar1, gasCar2, gasCar3, gasCar4];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([gasCar1,gasCar2,gasCar3,gasCar4])
  
      })

      test("Do a test case with an array of GasCar where none have no fuel", () => {
        const gasCar1 = new GasCar("Blue", 10)
        const gasCar2 = new GasCar("Red", 10)
        const gasCar3 = new GasCar("Black", 10)
        const gasCar4 = new GasCar("Green", 10)
        const carArray = [gasCar1, gasCar2, gasCar3, gasCar4];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([])
  
      })

      test("Do a test case with an array of GasCar where none have no fuel", () => {
        const gasCar1 = new GasCar("Blue", 10)
        const gasCar2 = new GasCar("Red", 10)
        const gasCar3 = new GasCar("Black", 10)
        const gasCar4 = new GasCar("Green", 10)
        const carArray = [gasCar1, gasCar2, gasCar3, gasCar4];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([])
  
      })

      test("Do a test case with an array of SolarCar", () => {
        const solarCar1 = new SolarCar("Blue")
        const solarCar2 = new SolarCar("Red")
        const solarCar3 = new SolarCar("Black")
        const solarCar4 = new SolarCar("Green")
        const carArray = [solarCar1, solarCar2, solarCar3, solarCar4];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([])
  
      })

      test("Do a test case with an array that has a mix of SolarCar and GasCar", () => {
        const gasCar1 = new GasCar("Blue", 0)
        const solarCar2 = new SolarCar("Red")
        const solarCar3 = new SolarCar("Black")
        const gasCar4 = new GasCar("Green", 10)
        const carArray = [gasCar1, solarCar2, solarCar3, gasCar4];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([gasCar1])
  
      })

      test("Do a test case with an empty array", () => {
        
        const carArray: Racer[]= [];
  
        expect(findRacersWithEmptyFuel(carArray)).toEqual([])
  
      })

})