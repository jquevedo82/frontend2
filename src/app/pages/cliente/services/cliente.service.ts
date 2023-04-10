import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Operadores } from 'src/app/models/operadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL= environment.clienteURL;


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Operadores[]> {
    //console.log(`${this.clienteURL}/`);
    return this.httpClient.get<Operadores[]>(`${this.clienteURL}/`);
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.clienteURL}/${id}`);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(`${this.clienteURL}/`, cliente);
  }

  public update(id: number, cliente: Cliente): Observable<any> {
    return this.httpClient.patch<any>(`${this.clienteURL}/${id}`, cliente);
    //return this.httpClient.put<any>(`${this.clienteURL}${id}`, cliente);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.clienteURL}/${id}`);
  }

  public lista2(dato: string): Observable<Operadores[]> {
    return this.httpClient.get<Operadores[]>(`${this.clienteURL}?dato=${dato}&limit=${100}`);
  }

}
