import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { JwtSessionsService } from '../../services/jwt-sessions.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ToastrModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  get er() {
    return this.form.controls;
  }
  hide = true;
  hidePin = true;
  user$!: Observable<any>;
  applicant$!: Observable<any>;
  showPasswordSubject = new BehaviorSubject(false);
  showPassword$ = this.showPasswordSubject.asObservable();
  form!: FormGroup;
  inProgress = false;
  year = new Date().getFullYear();

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private fb: FormBuilder,
    // private notify: NotificationService,
    private router: Router,
    private token: JwtSessionsService,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {
    // this.token.logout();
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  toggleShowPassword() {
    this.showPasswordSubject.next(!this.showPasswordSubject.value);
  }

  login() {
    this.token.logout();
    this.inProgress = true;
    this.authService.signin(this.form.value).subscribe(
      (data: any) => {
        if (data.jwtToken) {
          // this.notify.showSuccess("Please wait, you will be redirected automatically.", "Logged in successfully.");
          this.token.saveToken(data.jwtToken);
          this.router.navigate(['home']).then(() => {
            window.location.reload();
          });
        } else {
          // this.notify.showError("Please, recheck your username and password.", "Login failled.");
        }
        this.inProgress = false;
      },
      (error) => {
        // this.notify.showError("Wrong username or password", "Login failled.");
        this.inProgress = false;
      }
    );
  }
  // loginObj: Login;

  // constructor(private http: HttpClient, private router: Router) {
  //   this.loginObj = new Login();
  // }

  // #toastr = inject(ToastrService);

  // onLogin() {
  //   // display toastr
  //   this.#toastr.success('Login Success', 'Success');
  //   this.router.navigate(['/app']);
  //   debugger;
  //   this.http
  //     .post(
  //       'https://freeapi.miniprojectideas.com/api/User/Login',
  //       this.loginObj
  //     )
  //     .subscribe((res: any) => {
  //       if (res.result) {
  //         alert('Login Success');
  //         this.router.navigateByUrl('/dashboard');
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }
}

// export class Login {
//   EmailId: string;
//   Password: string;
//   constructor() {
//     this.EmailId = '';
//     this.Password = '';
//   }
// }
