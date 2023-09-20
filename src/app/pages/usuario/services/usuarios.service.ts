import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarioURL = environment.usuURL;

  constructor(private httpClient: HttpClient) {}
  public lista(): Observable<any[]> {
    console.log(`${this.usuarioURL}`);
    return this.httpClient.get<any[]>(`${this.usuarioURL}`);
  }
  public detail(id: number): Observable<any> {
    console.log(`${this.usuarioURL}${id}`);
    return this.httpClient.get<any>(`${this.usuarioURL}${id}`);
  }
}
