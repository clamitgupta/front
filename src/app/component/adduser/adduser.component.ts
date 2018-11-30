
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../../utils/constants';
import { AdduserService } from './adduser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'add-user',
  templateUrl: '../../template/adduser/adduser.component.html',
})
export class AdduserComponent implements OnInit {
  //varibles declearation
  public addUserFrm: FormGroup;
  public saveBtnDisabled:boolean = false;
  
  constructor(
    private router: Router,
    private service: AdduserService,
  ) { 
    this.initcontactusForm();
  } 
    
  ngOnInit() {
  }

  initcontactusForm() {
    this.addUserFrm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', {
        validators: [Validators.required],
      }),
      mobile: new FormControl('',Validators.required),
    });
  }
 
  // add user
  adduser(value) {
    this.saveBtnDisabled = true;
    return this.service.adduser(value).then(
      (res: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.router.navigate(['/']);
      }
    );
  }
}
    