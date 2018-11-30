import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ HomeComponent ],
  providers: [ HomeService ],
})
export class HomeModule { }
