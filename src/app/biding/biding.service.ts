import { Injectable } from '@angular/core';
import { Biding } from './biding.model';

@Injectable({ providedIn: 'root'})

export class BidingService {
    private _bidings: Biding[] = [
        {
            id: 'xyz',
            gemId: 'g1',
            gemTitle: 'Transparent',
            userId: 'abc',
            price: 45

        }
    ];

    get bidings() {
        return [...this._bidings];
    }
}
