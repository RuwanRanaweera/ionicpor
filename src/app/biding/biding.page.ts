import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Biding } from './biding.model';
import { BidingService } from './biding.service';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.page.html',
  styleUrls: ['./biding.page.scss'],
})
export class BidingPage implements OnInit {
  loadedBidings: Biding[];

  constructor( private bidingService: BidingService) { }

  ngOnInit() {
    this.loadedBidings = this.bidingService.bidings;
  }
  onCancelBiding(gemListId: string, slidingEl: IonItemSliding ){
    slidingEl.close();
  }

}
