import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
    representative: string;
    constructor() { }

    setRepresentative(rep: string) {
        this.representative = rep;
    }

    getRepresentative() {
        return this.representative;
    }

}