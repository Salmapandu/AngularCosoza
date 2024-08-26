import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Import CommonModule

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
    CommonModule, // Include CommonModule for ngIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: Login;
  errorMessage: string = ''; // Define the errorMessage property

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  #toastr = inject(ToastrService);

  onLogin() {
    // Display toastr
    this.#toastr.success('Login Success', 'Success');
    this.router.navigate(['/app']);
    debugger;
    this.http
      .post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login Success');
          this.router.navigateByUrl('/dashboard');
        } else {
          this.errorMessage = res.message; // Set error message if login fails
          alert(res.message);
        }
      });
  }

  onRegister() {
    // Define the onRegister method
    // Navigate to the registration page or handle registration logic
    this.router.navigate(['/register']); // Update the path as needed
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
