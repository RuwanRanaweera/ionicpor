import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Biding } from './biding.model';
import { BidingService } from './biding.service';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.page.html',
  styleUrls: ['./biding.page.scss'],
})
export class BidingPage implements OnInit, OnDestroy {
  loadedBidings: Biding[];
  private bidingSub: Subscription;

  constructor( private bidingService: BidingService) { }

  ngOnInit() {
 this.bidingService.bidings.subscribe(bidings => {
   this.loadedBidings = bidings;
 });
  }
  onCancelBiding(gemListId: string, slidingEl: IonItemSliding ){
    slidingEl.close();
  }
  ngOnDestroy() {
    if (this.bidingSub) {
      this.bidingSub.unsubscribe();
    }
  }

}
