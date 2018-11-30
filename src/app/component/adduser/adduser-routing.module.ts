import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser.component';
import { Component } from '@angular/core/src/metadata/directives';
const routes: Routes = [
  { path: '', component: AdduserComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdduserRoutingModule { }
