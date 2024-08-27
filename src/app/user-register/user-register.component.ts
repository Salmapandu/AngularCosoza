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
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  // Define registerObj with initial values
  registerObj = {
    Name: '',
    Address: '',
    Email: '',
    Phone: ''
  };

  // Define errorMessage property
  errorMessage: string = '';

  // Method to handle registration
  onRegister() {
    // Implement your registration logic here
    console.log('Registration attempted with:', this.registerObj);

   
  }
}

