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
    const successRes = await this.http.request('GET', this.baseUrl, {body: body, headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successRes;
  }
}
