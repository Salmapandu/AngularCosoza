import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth/auth.service';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ToastrModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  // Define registerObj with initial values
  registerObj = {
   firstname:"",
   lastname:"",
   email:"",
   address: "",
   mobile_phone: "",
   password:"",
   role:""
  };

  roles = ['ARTIST','LICENSEE']; // Dropdown options
  errorMessage: string | null = null;

  constructor(private router: Router, private registrationService: AuthService, private toastr: ToastrService) {}

  onRegister() {
    this.registrationService.register(this.registerObj).subscribe({
      next: (response) => {
        // Handle success (e.g., navigate to a different page or show a success message)
        this.toastr.success('Registraction Success', 'Success');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        // Handle error (e.g., show error message)
        this.errorMessage = 'Registration failed. Please try again.';
        this.toastr.error(this.errorMessage, 'Error!');

      }
    });
  }
}

 

