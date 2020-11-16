import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor( private authService: AuthService, private router: Router, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.form = new FormGroup(
      { user: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
  }

  onCreateGem() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

  async loging() {

    try {

      const res: any = await this.authService.login(JSON.stringify({
        email: this.form.value.user,
        password: this.form.value.password
      }));
      console.log(res);
      if (res.message == 'Success') {
        const toast = await this.toastCtrl.create({
          message: 'Successfully login',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.authService._userIsAuthenticated  = true;
        this.form.reset();
        this.router.navigateByUrl('/gems/tabs/search');
      }

    } catch (err) {
      console.log(err.error.message);
      const toast = await this.toastCtrl.create({
        message: 'Login failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
    }

}
