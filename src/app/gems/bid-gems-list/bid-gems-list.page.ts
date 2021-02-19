import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

@Component({
  selector: 'app-bid-gems-list',
  templateUrl: './bid-gems-list.page.html',
  styleUrls: ['./bid-gems-list.page.scss'],
})
export class BidGemsListPage implements OnInit {

  gemlist: Gem[];
  constructor(
    private gemsService: GemsService,
    private router: Router) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.gemlist = this.gemsService.gems.filter((gem) => {
      return (gem.type === 'biff')
    });
  }

  onEdit(gemsId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'gems', 'tabs', 'gem-list', 'edit-gem', gemsId]);
    console.log('Editing item', gemsId);
  }
}
