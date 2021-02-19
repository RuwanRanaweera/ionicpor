import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { BidingService } from '../../biding/biding.service';
import { CreateBidingComponent } from '../../biding/create-biding/create-biding.component';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

@Component({
  selector: 'app-gem-detail',
  templateUrl: './gem-detail.page.html',
  styleUrls: ['./gem-detail.page.scss'],
})
export class GemDetailPage implements OnInit {
  gem: Gem;

  constructor(
      private navCtrl: NavController,
      private gemsService: GemsService,
      private route: ActivatedRoute,
      private modalCtrl: ModalController,
      private actionSheetCtrl: ActionSheetController,
      private bidingService: BidingService
      ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('gemId')){
        this.navCtrl.navigateBack('/gems/tabs/search');
        return;
      }
      this.gem = this.gemsService.getGem(paramMap.get('gemId'));
    });
  }
  onBidGem(){
    // this.router.navigateByUrl('/gems/tabs/search');
    // this.navCtrl.navigateBack('/gems/tabs/search');
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
        text: 'Select Time',
        handler: () => {
          this.openBidModal('select');
        }
      },
      {
        text: 'Random Time',
        handler: () => {
          this.openBidModal('select');
        }

      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
  openBidModal(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl
    .create({
      component: CreateBidingComponent,
      componentProps: {selectedGem: this.gem}
    })
    .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BIDED!');
      }
    });
  }
}
