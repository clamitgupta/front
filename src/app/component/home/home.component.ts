
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../utils/constants';
import { HomeService } from './home.service';
import { Router, NavigationEnd ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: '../../template/home/home.component.html',
})
export class HomeComponent implements OnInit {
  //varibles declearation
  public q;
  public userData = [];
  
  constructor(
    private router: Router,
    private service: HomeService,
  ) { 
    this.getUserData();
  } 
    
  ngOnInit() {
  }

  // get all users data
  getUserData() {
    return this.service.getuserdata().then(
      (res: any) => {
        if(res.success) {
          this.userData = res.data;
        } else {
          this.userData = [];
        }
      },
      (error: any) => {
        this.userData = [];
      }
    );
  }

  //delete user
  deleteUser(userid) {
    return this.service.deleteUser(userid).then(
      (res: any) => {
        this.getUserData();
      },
      (error: any) => {
      }
    );
  }
}
    