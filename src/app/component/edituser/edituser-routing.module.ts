import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser.component';
import { Component } from '@angular/core/src/metadata/directives';
const routes: Routes = [
  { path: '', component: EdituserComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdituserRoutingModule { }
