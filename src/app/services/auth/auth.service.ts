import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { JwtSessionsService } from '../jwt-sessions.service';
import { ToastrService } from 'ngx-toastr';
// import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.baseUrl + 'auth/login';
  private readonly reg = environment.baseUrl + 'auth/register'

  constructor(
    private jwtHelper: JwtHelperService,
    private token: JwtSessionsService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private notify: ToastrService,
  ) 
  {}

  
  register(registerObj: any): Observable<any> {
    return this.http.post<any>(this.reg, registerObj);
  }

  signin(credentials: any): Observable<any> {
    return this.http.post<{ jwtToken: string }>(this.apiUrl, credentials);
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      map((response) => {

        let loggedIn = false;
        if (response.token) {
  
          sessionStorage.setItem('access_token', response.token);
          const decodedToken = this.jwtHelper.decodeToken(response.token);
          console.log("my token",decodedToken)
          const role = decodedToken.role;
          if (role === 'ADMIN') {
            this.router.navigate(['/app']).then(() => location.reload());
          } else if (role === 'ARTIST' || role ==='USER' || role === 'LICENSEE') {
            this.router.navigate(['/user']).then(() => location.reload());
          } else {
            // Default redirection if the role is unknown
            this.router.navigate(['/']).then(() => location.reload());
          }
          loggedIn = true;
        }
        return loggedIn;
      }),
      catchError((Error: HttpErrorResponse) => {
        this.notify.error('Invalid Username or Password', '');
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


