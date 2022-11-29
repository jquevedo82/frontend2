import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL= environment.clienteURL;
  private API_URL2: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=3ea2d6cd&';
  private API_URL: string = 'http://www.omdbapi.com/?apikey=3ea2d6cd';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.clienteURL}`);
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.clienteURL}${id}`);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(`${this.clienteURL}`, cliente);
  }

  public update(id: number, cliente: Cliente): Observable<any> {
    return this.httpClient.patch<any>(`${this.clienteURL}${id}`, cliente);
    //return this.httpClient.put<any>(`${this.clienteURL}${id}`, cliente);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.clienteURL}${id}`);
  }

  public peliculas(search: string):Observable<any> {
    return this.httpClient.get(`${this.API_URL}&s=${search}`);
  }

}
