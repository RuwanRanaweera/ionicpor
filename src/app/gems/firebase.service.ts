import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";


@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    imageUrls: string[] = [];
    constructor(private store: AngularFireStorage) { }

    uploadAnyImageToFirebase(files: File[], folderName: String) {
        const error = false;
        return new Promise((resolve, reject) => {

            this.imageUrls = [];
            for (let i = 0; i < files.length; i++) {

                let firstURL = files[i];
                console.log(firstURL);
                let path = `${folderName}/${firstURL.name}${(new Date()).getTime()}`;
                let ref = this.store.ref(path);
                this.store.upload(path, firstURL).then(rst => {
                    rst.ref.getDownloadURL().then(url => {
                        console.log('result url : ' + i + ' : ' + url);
                        this.imageUrls.push(url);
                        if (this.imageUrls.length === files.length) {

                            resolve(this.imageUrls);
                        }
                    },
                        err => {
                            console.log(JSON.stringify("firebase uploading error" + err));
                            reject(err)
                        });
                });
            }


        });

    }

}