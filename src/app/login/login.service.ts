import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  baseUrl = 'http://localhost:49789/api/User/Select/1';

  async fetchValuve(body) {
    console.log(body);
    const successRes = await this.http.request('POST', this.baseUrl, {body: body}).toPromise();
    return successRes;  
  }
}
