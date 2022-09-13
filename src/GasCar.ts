import { Racer } from "./Racer"

export class GasCar implements Racer{
    team: string;
    speed: number = 0;
    fuel: number;

    constructor(team: string, fuel: number = 10){
        this.team = team;
        this.fuel = fuel;
    };

    accelerate(){
        this.speed = this.speed + 2; 
        this.fuel = this.fuel - 1;
    };
    isFuelEmpty(): boolean{
        if(this.fuel <= 0){
            return true;
        }
        else{
            return false;
        }
    }
}
 
