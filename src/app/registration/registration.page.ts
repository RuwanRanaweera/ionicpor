import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, private router: Router, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        first: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        last: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        email: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        })
      });
  }

  onCreateGem() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

  async onsingup() {
    try {
      const res: any = await this.authService.singup(JSON.stringify({
        firstName: this.form.value.first,
        lastName: this.form.value.last,
        email: this.form.value.email,
        password: this.form.value.password
      }));

      if (res.message == 'Success') {
        const toast = await this.toastCtrl.create({
          message: 'User created successfully',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.authService._userIsAuthenticated  = true;
        this.form.reset();
        this.router.navigateByUrl('/login');
      }

    } catch (err) {
      console.log(err.error);
      const toast = await this.toastCtrl.create({
        message: 'User creation failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }

  }

}
