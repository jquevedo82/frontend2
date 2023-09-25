import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteGuard  {
  realRol: string = '';

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRol = next.data['expectedRol'];
    this.realRol = this.tokenService.isAdmin() ? 'admin' : 'user';

    if (
      !this.tokenService.isLogged() ||
      expectedRol.indexOf(this.realRol) < 0
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
