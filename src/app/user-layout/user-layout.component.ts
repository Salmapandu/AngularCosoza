import { Component } from '@angular/core';
import { TopnavComponent } from "../resources/topnav/topnav.component";
import { SidenavComponent } from "../resources/sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../resources/footer/footer.component';
import { UserSidenavComponent } from "../user-sidenav/user-sidenav.component";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, TopnavComponent, FooterComponent, UserSidenavComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
