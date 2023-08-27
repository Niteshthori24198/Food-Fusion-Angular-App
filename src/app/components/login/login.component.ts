import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthTokenService } from 'src/app/services/auth-token.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthTokenService,
    private authentication: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.authentication.loginUser(user).subscribe((response) => {
        if (response.length > 0) {
          alert('User ' + user.email + ' has been logged in successfully');
          const token = this.authService.generateToken(35);
          this.authService.setToken(token, response[0]);
          this.router.navigate(['/menu']);
        } else {
          alert('Invalid Credentials');
        }
      });
    }
  }
}
