import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../resources/sidenav/sidenav.component';
import { TopnavComponent } from '../../resources/topnav/topnav.component';
import { FooterComponent } from '../../resources/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, TopnavComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor() {
    
  }
}
