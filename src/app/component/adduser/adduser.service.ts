import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../../utils/constants';

@Injectable()
export class AdduserService {
  public Url: string = Constants.BaseUrl;
  constructor(private http: HttpClient) { }

  // add new user
  adduser(value: any):Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      const apiURL = self.Url + 'adduser';
      const headers = new HttpHeaders();
      headers.set('Content-type', 'application/json');
      const params = new HttpParams()
      .set('firstname', value.fname)
      .set('lastname', value.lname)
      .set('email', value.email.toLowerCase())
      .set('mobile', value.mobile)
      self.http.post(apiURL, params)
      .subscribe(
        res => { // Success
          resolve(res);
        },
        errormsg => { // Error
          reject(errormsg);
        }
      );
    });
  }
}