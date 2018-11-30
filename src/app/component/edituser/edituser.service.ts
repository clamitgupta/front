import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../../utils/constants';

@Injectable()
export class EdituserService {
  public Url: string = Constants.BaseUrl;
  constructor(private http: HttpClient) { }

  // add new user
  edituser(value: any,userId):Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      const  apiURL = self.Url + 'editUser';
      const headers = new HttpHeaders();
      headers.set('Content-type', 'application/json');
      const params = new HttpParams()
      .set('firstname', value.fname)
      .set('lastname', value.lname)
      .set('email', value.email.toLowerCase())
      .set('mobile', value.mobile)
      .set('userid', userId)
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

  // get all users
  getuserdata(userid): Promise<any> {
    const self = this;
    return new Promise(function(resolve , reject) {
      const apiURL = self.Url + 'getUserDetail';
      const headers = new HttpHeaders();
      headers.set('Content-type', 'application/json');
      self.http.get(apiURL,{params:new HttpParams()
        .set('id', userid)
      })
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