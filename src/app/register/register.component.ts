import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      'username': [''],
      'password1': [''],
      'password2': [''],
    })
   }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(data => {
      this.router.navigate(["login"])
    })
  }

}
