import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  snack: string = '';
  isLoading: boolean = false;
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(private authService: AuthService) {}

  login() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;

    if (
      email != null &&
      password != null &&
      this.validateEmail() &&
      this.validatePassword()
    ) {
      this.isLoading = true;
      this.authService.login(email, password).subscribe(
        (success: boolean) => {
          if (success) {
            // Handle successful login (e.g., redirect to another page)
            console.log('Login successful');
            this.snack = 'Login successful';
            this.isLoading = false;
          } else {
            // Handle unsuccessful login
            console.log('Invalid credentials');
            this.snack = 'Email or password is incorrect!';
            this.isLoading = false;
          }
        },
        (error) => {
          // Handle error from the login function
          console.error('An error occurred during login:', error);
          this.snack = 'An error occurred during login:' + error;
          this.isLoading = false;
        }
      );
    }
  }

  validateEmail(): boolean {
    const email = this.emailControl.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === null || email === '') {
      this.snack = 'Email field cannot be empty!';
      return false;
    } else if (!emailRegex.test(email)) {
      this.snack = 'Please enter a valid email address!';
      return false;
    } else {
      this.snack = '';
      return true;
    }
  }

  validatePassword(): boolean {
    const password = this.passwordControl.value;
    const passwordRegex = /[A-Z]/;
    if (password === null || password === '') {
      this.snack = 'Password field cannot be empty!';
      return false;
    } else if (password.length < 8) {
      this.snack = 'Password should have at least 8 characters!';
      return false;
    } else if (!passwordRegex.test(password)) {
      this.snack = 'Password must contain at least one capital letter!';
      return false;
    } else {
      this.snack = '';
      return true;
    }
  }
}
