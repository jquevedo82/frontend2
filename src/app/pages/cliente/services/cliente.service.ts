import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Operadores } from 'src/app/models/operadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clienteURL = environment.clienteURL;

  constructor(private httpClient: HttpClient) {}

  public lista(datos : any): Observable<any> {
    console.log(`${this.clienteURL}/`);
    return this.httpClient.get<any>(`${this.clienteURL}/`, { params : datos });
  }

  public detail(id: number): Observable<Operadores> {
    console.log(`${this.clienteURL}/${id}`);
    return this.httpClient.get<Operadores>(`${this.clienteURL}/${id}`);
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
    return this.httpClient.get<Operadores[]>(
      `${this.clienteURL}?dato=${dato}&limit=${100}`
    );
  }
}
