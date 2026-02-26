import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatAnchor,
    MatIcon,
    Navbar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
