import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor( private loginService: LoginService ) { }

  ngOnInit() {
    this.form = new FormGroup(
      { user: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(6)]
        })
      });
  }

  onCreateGem() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

 loging() {

    console.log("this is work");

    // const res: any = await  this.gemsService.fetchValuve();

    // console.log(res);
  }

}
