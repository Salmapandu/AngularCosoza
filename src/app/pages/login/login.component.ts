import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  #toastr = inject(ToastrService);

  onLogin() {
    // display toastr
    this.#toastr.success('Login Success', 'Success');
    this.router.navigate(['/app']);
    debugger;
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/User/Login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login Success');
          this.router.navigateByUrl('/dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}

export class Login {
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
