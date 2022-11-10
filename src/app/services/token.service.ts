import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getUserName(): any {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const username = valuesJson.username;
    return username;
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const username = valuesJson.username;
    const roles = valuesJson.roles;
    if (roles.indexOf('admin') < 0) {
      return false;
    }
    return true;
  }

  logOut(): void {
    localStorage.clear();
  }
}
