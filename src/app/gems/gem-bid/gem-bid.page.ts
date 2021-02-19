import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

@Component({
  selector: 'app-gem-bid',
  templateUrl: './gem-bid.page.html',
  styleUrls: ['./gem-bid.page.scss'],
})
export class GemBidPage implements OnInit {
  gem: Gem;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private gemsService: GemsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('gemId') ){
        this.navCtrl.navigateBack('/gems/tabs/gem-list');
        return;
      }
      this.gem = this.gemsService.getGem(paramMap.get('gemId'));

    });
  }

  confirmdelete() {
    const alert = this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Do you confirm to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Delete');
          }
        }
      ]
    })
    // alert.present();
    .then(alertCtrl => {
      alertCtrl.present();
    });
  }


}
