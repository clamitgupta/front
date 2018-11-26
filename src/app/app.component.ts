import { Component,ElementRef,Renderer2,ViewChild} from '@angular/core';
import { Router,NavigationEnd ,RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
  ) {
   
  }
  title = 'app';
}

