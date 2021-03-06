import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../../utils/constants';

@Injectable()
export class HomeService {
  public Url: string = Constants.BaseUrl;
  constructor(private http: HttpClient) { }

  // get all users
  getuserdata(): Promise<any> {
    const self = this;
    return new Promise(function(resolve , reject) {
      const apiURL = self.Url + 'getUserData';
      const headers = new HttpHeaders();
      headers.set('Content-type', 'application/json');
      self.http.get(apiURL,{params:new HttpParams()
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

  //delete user data
  deleteUser(id): Promise<any> {
    const self = this;
    return new Promise(function(resolve , reject) {
      const apiURL = self.Url + 'deleteUserData';
      const headers = new HttpHeaders();
      headers.set('Content-type', 'application/json');
      self.http.get(apiURL,{params:new HttpParams()
        .set('id', id)
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