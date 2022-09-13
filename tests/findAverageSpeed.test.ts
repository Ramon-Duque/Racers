import { findAverageSpeed } from "../src/racer-fucntions";
import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";
import { Racer } from "../src/Racer"

describe("findAverageSpeed tests",() => {

    test("Do a test case with an array of GasCar with different speeds", () => {
        const gasCar1 = new GasCar("Red")
        gasCar1.accelerate()
        const gasCar2 = new GasCar("Blue")
        gasCar2.accelerate()
        gasCar2.accelerate()
        const gasCar3 = new GasCar("Black")
        gasCar3.accelerate()
        gasCar3.accelerate()
        gasCar3.accelerate()
        const racers: Racer[] = [gasCar1,gasCar2,gasCar3]

        expect(findAverageSpeed(racers)).toEqual(4)

    })

    test("Do a test case with an array that has a mix of SolarCar and GasCar with different speeds", () => {
        const gasCar1 = new GasCar("Red")
        gasCar1.accelerate()
        const gasCar2 = new GasCar("Blue")
        gasCar2.accelerate()
        gasCar2.accelerate()
        const solarCar3 = new SolarCar("Black")
        solarCar3.accelerate()
        solarCar3.accelerate()
        solarCar3.accelerate()
        const racers: Racer[] = [gasCar1,gasCar2,solarCar3]

        expect(findAverageSpeed(racers)).toEqual(3)

    })

    test("Do a test case with an array of cars that all have 0 speed", () => {
        const gasCar1 = new GasCar("Red")
        
        const gasCar2 = new GasCar("Blue")
        
        const solarCar3 = new SolarCar("Black")
        
        const racers: Racer[] = [gasCar1,gasCar2,solarCar3]

        expect(findAverageSpeed(racers)).toEqual(0)

    })

    test("Do a test case with an empty array", () => {
        const racers: Racer[]= []
        expect(findAverageSpeed(racers)).toEqual(0)
    })
}) 