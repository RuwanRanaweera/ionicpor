import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GemsService } from '../../gems.service';

@Component({
  selector: 'app-new-gem',
  templateUrl: './new-gem.page.html',
  styleUrls: ['./new-gem.page.scss'],
})
export class NewGemPage implements OnInit {
  form: FormGroup;
  constructor( private gemsService: GemsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        title: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        }),
        price: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        })
        // ,
        // dateFrom: new FormControl(null, {
        //   updateOn: 'blur',
        //   validators: [Validators.required]
        // }),
        // dateTo: new FormControl(null, {
        //   updateOn: 'blur',
        //   validators: [Validators.required]
        // })
      });
  }
  onCreateGem() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    this.gemsService.addGem(this.form.value.title, this.form.value.description, +this.form.value.price );
    // this.form.reset();
    // this.router.navigate(['/gems/tabs/gem-list']);
  }

}
