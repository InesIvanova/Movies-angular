import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalid;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.fb.group({
      'username': [''],
      'password': [''],
    })
    this.invalid = false;
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.authService.saveToken(data['key']);
      this.authService.saveUserEmail(data['user']['email']);
      this.authService.saveUsername(data['user']['username'])
      this.router.navigate(["movies"])
    },
    err => {
      this.invalid = true;
    })
  }

}
