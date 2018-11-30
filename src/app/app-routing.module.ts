import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const route: Routes = [
  { path: '', loadChildren: './component/home/home.module#HomeModule'},
  { path: 'adduser', loadChildren: './component/adduser/adduser.module#AdduserModule'},
  { path: 'edituser/:id', loadChildren: './component/edituser/edituser.module#EdituserModule'},
 ];

@NgModule({
  imports: [ RouterModule.forRoot(route)],
  exports: [ RouterModule],
  providers: []
})
export class AppRoutingModule { }
