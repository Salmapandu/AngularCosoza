import { Component } from '@angular/core';
import { ApplyForRegistrationComponent } from "../apply-for-registration/apply-for-registration.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [ApplyForRegistrationComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
