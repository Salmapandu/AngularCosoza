import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidenav',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './user-sidenav.component.html',
  styleUrl: './user-sidenav.component.css'
})
export class UserSidenavComponent {

}
