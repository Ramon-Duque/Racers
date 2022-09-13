import { Racer } from "./Racer"

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    const emptyArray: Racer[]= [];
    racers.filter((element) =>{
        if(element.isFuelEmpty()){
            return emptyArray.push(element)
        }})
        return emptyArray
}



export function findAverageSpeed (racers: Racer[]):number {
   let totalSpeed = 0
   if (racers.length > 0){
    for(const element of racers){
        totalSpeed += element.speed;
    }
    return totalSpeed / racers.length;
   } else {
    return 0;
   }
}

export function getFasterRacer (racerA:Racer, racerB:Racer): Racer | null {
    if (racerA.speed > racerB.speed) {
      return racerA
    }
    else if (racerB.speed > racerA.speed){
        return racerB
    } else  {
            return null
        }
    
}