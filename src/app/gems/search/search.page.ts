import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';
// import { SegmentChangeEventDetail } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  loadedGems: Gem[];
  listedLoadedGems: Gem[];
  constructor(
    private gemsService: GemsService,
    private menuCtrl: MenuController ) { }

  ngOnInit() {
    this.loadedGems = this.gemsService.gems;
    this.listedLoadedGems = this.loadedGems.slice(1);
  }
  onOpenMenu(){
    this.menuCtrl.close();
  }
  onFilterUpdate(event: any) {
    console.log(event.detail);
  }
}
