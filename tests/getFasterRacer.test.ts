import { getFasterRacer } from "../src/racer-fucntions";
import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";
import { Racer } from "../src/Racer";

describe("getFasterRacer funtion tests", () => {
    test("Test with racerA faster", () => {
        const racerA = new GasCar("Black")
        racerA.accelerate()
        racerA.accelerate()
        const racerB = new SolarCar("Green")
        racerB.accelerate()
        
        expect(getFasterRacer(racerA, racerB)).toBe(racerA)
    })

    test("Test with racerB faster", () => {
        const racerA = new GasCar("Black")
        racerA.accelerate()
        
        const racerB = new SolarCar("Green")
        racerB.accelerate()
        racerB.accelerate()
        racerB.accelerate()
        
        expect(getFasterRacer(racerA, racerB)).toBe(racerB)
    })

    test("Test with both racers the same speed", () => {
        const racerA = new GasCar("Black")
        racerA.accelerate()
        
        const racerB = new SolarCar("Green")
        racerB.accelerate()
        racerB.accelerate()
        
        
        expect(getFasterRacer(racerA, racerB)).toBe(null)
    })
})