import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard  {
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.isLogged()) {
      //if (!this.tokenService.isLogged()) {
      console.log('guard login');
      this.router.navigate(['/login']);
      return false;
    }

    console.log('esta logiado');
    return true;
  }
}
