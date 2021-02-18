import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Gem } from '../../gems/gem.model';

@Component({
  selector: 'app-create-biding',
  templateUrl: './create-biding.component.html',
  styleUrls: ['./create-biding.component.scss'],
})
export class CreateBidingComponent implements OnInit {
@Input() selectedGem: Gem;
@ViewChild('f') form: NgForm;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onBidGem(){
      if (!this.form.valid){
        return;
      }
      this.modalCtrl.dismiss({ bidingData: {
      gemName: this.form.value['gem-name'],
      gemId: this.form.value['gem-id'],
      bidPrice: +this.form.value.price,
      buyerId: this.form.value['by-id']
}
},
 'confirm');
  }
  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
