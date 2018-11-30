
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../../utils/constants';
import { EdituserService } from './edituser.service';
import { Router, NavigationEnd ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'edit-user',
  templateUrl: '../../template/edituser/edituser.component.html',
})
export class EdituserComponent implements OnInit {
  //varibles declearation
  public editUserFrm: FormGroup;
  public saveBtnDisabled:boolean = false;
  public userData:any = [];
  public userId = 0;
  
  constructor(
    private router: Router,
    private service: EdituserService,
    public route: ActivatedRoute,
  ) { 

    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    this.initeditForm();
    this.getUserData(this.userId);
  } 
    
  ngOnInit() {
  }

  initeditForm() {
    this.editUserFrm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', {
        validators: [Validators.required],
      }),
      mobile: new FormControl('',Validators.required),
    });
  }

  // get users detail
  getUserData(userId) {
    return this.service.getuserdata(userId).then(
      (res: any) => {
        if(res.success) {
          this.userData = res.data;
          this.editUserFrm.controls['fname'].setValue(this.userData.firstname);
          this.editUserFrm.controls['lname'].setValue(this.userData.lastname);
          this.editUserFrm.controls['email'].setValue(this.userData.email);
          this.editUserFrm.controls['mobile'].setValue(this.userData.mobile);
        } else {
          this.userData = [];
        }
      },
      (error: any) => {
        this.userData = [];
      }
    );
  }

  // add user
  edituser(value) {
    this.saveBtnDisabled = true;
    return this.service.edituser(value,this.userId).then(
      (res: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.router.navigate(['/']);
      }
    );
  }
}
    
