import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { JwtSessionsService } from '../jwt-sessions.service';
// import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.baseUrl + 'auth/login';

  constructor(
    private jwtHelper: JwtHelperService,
    private token: JwtSessionsService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) // private notify: NotificationService,
  {}

  signin(credentials: any): Observable<any> {
    return this.http.post<{ jwtToken: string }>(this.apiUrl, credentials);
  }

  login(credentials: any) {
    return this.http.post<{ jwtToken: string }>(this.apiUrl, credentials).pipe(
      map((response) => {
        let loggedIn = false;
        if (response.jwtToken) {
          sessionStorage.setItem('access_token', response.jwtToken);
          loggedIn = true;
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]).then(location.reload);
        }
        return loggedIn;
      }),
      catchError(() => {
        // this.notify.showError("Invalid Username or Password", "");
        return throwError(() => false);
      })
    );
  }

  logout(returnUrl?: string): void {
    sessionStorage.removeItem('access_token');
    this.router.navigate(['/'], { queryParams: { returnUrl } });
  }

  loggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token.getToken()!.toString());
  }

  get user() {
    const decoded = this.token.getTokenUser();
    return decoded;
  }
}
