import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EdituserRoutingModule } from './edituser-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { EdituserService } from './edituser.service';

@NgModule({
  imports: [
    CommonModule,
    EdituserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ EdituserComponent ],
  providers: [ EdituserService ],
})
export class EdituserModule { }
