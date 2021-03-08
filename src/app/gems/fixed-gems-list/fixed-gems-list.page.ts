import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

import { FirebaseService } from '../firebase.service';   

@Component({
  selector: 'app-fixed-gems-list',
  templateUrl: './fixed-gems-list.page.html',
  styleUrls: ['./fixed-gems-list.page.scss'],
})
export class FixedGemsListPage implements OnInit {

  gemlist: Gem[];
  constructor(
    private gemsService: GemsService,
    private router: Router ,

    private firebaseService: FirebaseService
    
    ) { }
    

  ngOnInit() {}

  ionViewWillEnter() {
    this.gemlist = this.gemsService.gems.filter((gem) => {
      return gem.type == 'griff'
    });
  }

  onEdit(gemsId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'gems', 'tabs', 'gem-list', 'edit-gem', gemsId]);
    console.log('Editing item', gemsId);
  }

}
