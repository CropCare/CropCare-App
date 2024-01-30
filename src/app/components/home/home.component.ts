import { Component } from '@angular/core';
import { NavbarSmComponent } from '../navbar-sm/navbar-sm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarSmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
