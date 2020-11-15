import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

@Component({
  selector: 'app-gem-list',
  templateUrl: './gem-list.page.html',
  styleUrls: ['./gem-list.page.scss'],
})
export class GemListPage implements OnInit {
  gemlist: Gem[];
  constructor(
    private gemsService: GemsService,
    private router: Router) { }

  ngOnInit() {
    this.gemlist = this.gemsService.gems;
  }
  onEdit(gemsId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'gems', 'tabs', 'gem-list', 'edit-gem', gemsId]);
    console.log('Editing item', gemsId);
  }

}
