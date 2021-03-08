import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { GemsService } from '../../gems/gems.service';
import { FirebaseService } from '../firebase.service';
import { HttpClient } from '@angular/common/http'; 
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-new-gem',
  templateUrl: './new-gem.page.html',
  styleUrls: ['./new-gem.page.scss'],
})
export class NewGemPage implements OnInit {
  form: FormGroup;
  privUrl: String;
  constructor( private gemsService: GemsService, private router: Router, private firebaseService: FirebaseService , private http:HttpClient) { }

  ngOnInit() {
    this.router.events
    .pipe(filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
    ).subscribe((e: any) => {
      this.privUrl = e[0].urlAfterRedirects;
    });
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
    // if (!this.form.valid) {
    //   return;
    // }
    // console.log(this.form);
    // this.gemsService.addGem(this.form.value.title, this.form.value.description, +this.form.value.price, this.form.value.type );
    // this.form.reset();
    // if (this.form.value.type === 'griff') {
    //   this.router.navigate(['gems/fixed-gems-list']);
    // } else {
    //   this.router.navigate(['gems/bid-gems-list']);
    // }
  }

  onCancle() {
    this.form.reset();
  }

  //file upload

  files : File[]=[];
  urls: string[];
  eve: EventTarget
  onSelectFile(event) {
    console.log("event : " + JSON.stringify(event.target.files[0]))
    this.files = [];
    this.urls = [];
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      this.eve = event.target.files;
      console.log("event : " + JSON.stringify(event.target.files[0]))
      for (let i = 0; i < filesAmount; i++) {
        var reader: any,
          target: EventTarget;
        reader = new FileReader();
        this.files.push(event.target.files.item(i));
        console.log("event : " + JSON.stringify(event.target.files[0]))
        reader.onload = (event) => {
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  uploadToFIrebase(){
      this.firebaseService.uploadAnyImageToFirebase(this.files,"firebaseSampleTest").then(
        (res: string[])=>{
          console.log(res[0])

          let data = {
            gemName:this.form.controls.title.value,
            gemDescription:this.form.controls.description.value,
            price:this.form.controls.price.value,
            gemBid:this.form.controls.type.value,
            gemImage:res[0]
          }

         this.http.post('http://localhost:49789/api/Gem/insert',data).subscribe(
           res=>{
console.log(res , 'Successfullly Saved ....!')
           },
           err=>{
              console.log(err)
           }
         )  


        },err=>{
          console.log("error in uploading to the firebase")
        }
      )
  }


}
