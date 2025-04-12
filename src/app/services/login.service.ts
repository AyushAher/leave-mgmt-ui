import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  GetCode() {
    return `https://login.microsoftonline.com/${environment.tenentId}/oauth2/v2.0/authorize?client_id=${environment.clientId}&response_type=code&redirect_uri=${environment.redirectUri}&response_mode=query&scope=${environment.scope}&state=12345`;
  }

  GetToken() {
    return localStorage.getItem('token');
  }

  Logout() {
    localStorage.clear();
  }
}
