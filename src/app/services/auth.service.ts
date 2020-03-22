import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'rest-auth/login/'
  private registerPath = environment.apiUrl + 'rest-auth/registration/'
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.loginPath, data)
  }

  saveToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    localStorage.getItem('token')
  }

  saveUserEmail(userEmail) {
    console.log(userEmail)
    localStorage.setItem('email', userEmail)
  }

  register(data) {
    return this.http.post(this.registerPath,  data)
  }


}
