import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationService } from '../../services/application/application.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: ISummary = {
    users: 0,
    applications: 0,
    licensee: 0,
    artworks: 0,
  }
  userSub?: Subscription;

  constructor(private applicationServ: ApplicationService) {}

  private userService = inject(UserService);

  getCounts(): void {
    this.userSub = this.userService.getUsers().subscribe({
      next: (res) => {
        this.data.users = res.length;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.applicationServ.getApplications().subscribe({
      next: (res) => {
        this.data.applications = res.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getCounts();
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}

interface ISummary {
  users?: number;
  applications?: number;
  licensee?: number;
  artworks?: number;
  payments?: number;

  //TODO: add more if necessary
}