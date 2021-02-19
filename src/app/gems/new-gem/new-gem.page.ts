import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GemsService } from '../../gems/gems.service';

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
        },
        ),
        type: new FormControl('biff', {
          validators: [Validators.required]
        },
        )
      });
  }
  onCreateGem() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    this.gemsService.addGem(this.form.value.title, this.form.value.description, +this.form.value.price, this.form.value.type );
    this.form.reset();
    if (this.form.value.type === 'griff') {
      this.router.navigate(['gems/fixed-gems-list']);
    } else {
      this.router.navigate(['gems/bid-gems-list']);
    }
  }

  onCancle() {
    this.form.reset();
  }

}
