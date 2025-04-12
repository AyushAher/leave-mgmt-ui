import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AccessTokenResponse } from '../../DTO/responses/AcessTokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  exportAs: 'login',
  imports: [RouterModule],
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginCodeUrl: string | undefined;

  constructor(
    router: Router,
    route: ActivatedRoute,
    authService: LoginService
  ) {
    this.loginCodeUrl = authService.GetCode();
    const code = route.snapshot.queryParamMap.get('code');
    if (code) {
      localStorage.setItem('token', code);
      router.navigate(['/']);
    }
  }
}
