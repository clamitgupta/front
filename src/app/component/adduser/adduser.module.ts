import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdduserRoutingModule } from './adduser-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { AdduserService } from './adduser.service';

@NgModule({
  imports: [
    CommonModule,
    AdduserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ AdduserComponent ],
  providers: [ AdduserService ],
})
export class AdduserModule { }
