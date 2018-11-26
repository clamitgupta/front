
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../../utils/constants';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: '../../template/home/home.component.html',
})
export class HomeComponent implements OnInit {
  //varibles declearation
  public addUserFrm: FormGroup;
  public saveBtnDisabled:boolean = false;
  public q;
  public userData = [];
  public onAddUser:boolean = true;
  public userId = 0;
  public isEditUser:boolean = false;
  public currentUser = [];
  public tabName = 'list';

  constructor(
    private router: Router,
    private service: HomeService,
  ) { 
    this.initcontactusForm();
    this.getUserData();
  } 
    
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scrollToFirst();
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

  onsubmitFunction() {
    this.onAddUser = true;
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
        this.userData = res.data;
      },
      (error: any) => {
      }
    );
  }

  //editUserData
  editUserData(userId) {
    this.userId = userId;
    this.isEditUser = true;
    this.currentUser = this.userData.filter(item => item.id == userId);
    this.addUserFrm.controls['fname'].setValue(this.currentUser[0].firstname);
    this.addUserFrm.controls['lname'].setValue(this.currentUser[0].lastname);
    this.addUserFrm.controls['email'].setValue(this.currentUser[0].email);
    this.addUserFrm.controls['mobile'].setValue(this.currentUser[0].mobile);
    this.tabName = 'edit';
  }

  //addNew User
  addNewUser() {
    this.userId = 0;
    this.isEditUser = false;
    this.addUserFrm.controls['fname'].setValue('');
    this.addUserFrm.controls['lname'].setValue('');
    this.addUserFrm.controls['email'].setValue('');
    this.addUserFrm.controls['mobile'].setValue('');
    this.tabName = 'add';
  }

  // back to list tab 
  backFunction() {
    this.userId = 0;
    this.isEditUser = false;
    this.addUserFrm.controls['fname'].setValue('');
    this.addUserFrm.controls['lname'].setValue('');
    this.addUserFrm.controls['email'].setValue('');
    this.addUserFrm.controls['mobile'].setValue('');
    this.tabName = 'list';
  }

  // add user
  addOrEdituser(value) {
    this.saveBtnDisabled = true;
    return this.service.adduser(value,this.userId).then(
      (res: any) => {
        this.onAddUser = false;
        this.saveBtnDisabled = false;
        this.userId = 0;
        this.isEditUser = false;
        if(res.success) {
          this.userData = res.data;
        }
        this.addUserFrm.controls['fname'].setValue('');
        this.addUserFrm.controls['lname'].setValue('');
        this.addUserFrm.controls['email'].setValue('');
        this.addUserFrm.controls['mobile'].setValue('');
        this.tabName = 'list';
      },
      (error: any) => {
        this.onAddUser = false;
        this.saveBtnDisabled = false;
        this.userId = 0;
        this.isEditUser = false;
        this.addUserFrm.controls['fname'].setValue('');
        this.addUserFrm.controls['lname'].setValue('');
        this.addUserFrm.controls['email'].setValue('');
        this.addUserFrm.controls['mobile'].setValue('');
        this.tabName = 'list';
      }
    );
  }

  // scroll to top
  scrollToFirst() {
    const element = document.querySelector("#destination");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
    