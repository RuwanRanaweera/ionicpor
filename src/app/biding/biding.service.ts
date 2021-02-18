import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Biding } from './biding.model';
import { delay, take, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root'})

export class BidingService {
    private _bidings = new BehaviorSubject<Biding[]>([]);

    get bidings() {
        return this._bidings.asObservable();
    }

    constructor(private authService: AuthService){}

    addBooking(
    gemId: string,
    userId: string,
    gemTitle: string,
    price: number,
    gemImage: string,
    ){
        const newBiding =  new Biding(
            Math.random().toString(),
            gemId,
            this.authService.userId,
            gemTitle,
            gemImage,
            price
           );
        return this.bidings.pipe(
            take(1),
            delay(1000),
            tap(bidings => {
               this._bidings.next(bidings.concat(newBiding));
           })
           );
    }

    cancelBooking(bookingId: string){}
}
