import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
//import { ContactComponent } from './contact/contact.component.spec'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Angular application';
}
