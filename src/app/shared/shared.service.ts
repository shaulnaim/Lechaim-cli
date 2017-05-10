import { Injectable } from '@angular/core';
var representative ;

@Injectable()
export class SharedDataService {
    constructor() { }

    setRepresentative (rep:string) {
        representative = rep;
    }
    
    getRepresentative() {
        return representative;
    }

}