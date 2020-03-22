import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'rest-auth/login/'
  private registerPath = environment.apiUrl + 'rest-auth/registration/'
  constructor(private http: HttpClient, private router: Router) { }

  login(data) {
    return this.http.post(this.loginPath, data)
  }

  saveToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  saveUserEmail(userEmail) {
    console.log(userEmail)
    localStorage.setItem('email', userEmail)
  }

  saveUsername(username) {
    localStorage.setItem('username', username)
  }

  getUsername() {
    return localStorage.getItem('username')
  }

  register(data) {
    return this.http.post(this.registerPath,  data)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    this.router.navigate(["login"])
  }
}
