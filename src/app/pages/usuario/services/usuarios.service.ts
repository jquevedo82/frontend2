import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuarios/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarioURL = environment.usuURL;

  constructor(private httpClient: HttpClient) {}
  public lista(datos : any): Observable<any[]> {

    return this.httpClient.get<any[]>(`${this.usuarioURL}`, { params : datos });
  }
  public detail(id: number): Observable<any> {
    console.log(`${this.usuarioURL}${id}`);
    return this.httpClient.get<any>(`${this.usuarioURL}${id}`);
  }
  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`);
  }
  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.patch<any>(`${this.usuarioURL}${id}`, usuario);
    //return this.httpClient.put<any>(`${this.clienteURL}${id}`, cliente);
  }
}
