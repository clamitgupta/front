import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const route: Routes = [
  { path: '', loadChildren: './component/home/home.module#HomeModule'},
 ];

@NgModule({
  imports: [ RouterModule.forRoot(route)],
  exports: [ RouterModule],
  providers: []
})
export class AppRoutingModule { }
