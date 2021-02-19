import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Gem } from '../gem.model';
import { GemsService } from '../gems.service';

@Component({
  selector: 'app-edit-gem',
  templateUrl: './edit-gem.page.html',
  styleUrls: ['./edit-gem.page.scss'],
})
export class EditGemPage implements OnInit {
gem: Gem;
  constructor(
    private route: ActivatedRoute,
    private gemsService: GemsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('gemId')) {
        this.navCtrl.navigateBack('/gems/tabs/gem-list');
        return;
      }
      this.gem = this.gemsService.getGem(paramMap.get( 'gemId'));
    });
  }

}
