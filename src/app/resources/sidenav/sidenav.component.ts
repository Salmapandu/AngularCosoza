import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtSessionsService } from '../../services/jwt-sessions.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit {
  role: any = null;
  constructor(
    private token: JwtSessionsService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.token.getToken()) {
      console.log(
        this.jwtHelper.decodeToken(this.token.getToken()!.toString())
      );
      const user = this.jwtHelper.decodeToken(
        this.token.getToken()!.toString()
      );
      this.role = user;
    } else {
      this.router.navigate(['/']);
    }
  }
}
