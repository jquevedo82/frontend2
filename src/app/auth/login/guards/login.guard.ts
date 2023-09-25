import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard  {
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.isLogged()) {
      console.log("esta logiado");
      this.router.navigate(['/']);
      return false;
    }
console.log("guard login");
    return true;
  }
}
