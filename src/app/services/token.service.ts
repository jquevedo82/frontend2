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
  tokenExpired(token: any): boolean {
    if (!this.isLogged()) {
      // console.log("aqui");
      return true;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const currentTime = Date.now();
    //console.log(valuesJson,currentTime);
    if (valuesJson.exp * 1000 < currentTime) return true;
    return false; // Devuelve true si el token está vencido, de lo contrario, false
  }
  getUserName(): any {
    //localStorage.clear();
    if (!this.isLogged()) {
      // console.log("aqui");
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const username = valuesJson.username;
    return username;
  }
  getDescri(): any {
    if (!this.isLogged()) {
      // console.log("aqui");
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const descri = valuesJson.descri;
    return descri;
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
