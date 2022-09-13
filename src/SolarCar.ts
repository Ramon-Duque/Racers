import { Racer } from "./Racer";

export class SolarCar implements Racer {
    team:string;
    speed = 0;
    constructor(team:string){
        this.team = team;
    }
    accelerate(): void {
        this.speed++
    }
    isFuelEmpty(): boolean {
       return(false)
    }

}

