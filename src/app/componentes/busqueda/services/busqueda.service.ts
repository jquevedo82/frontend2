import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operadores } from 'src/app/models/operadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusquedaService {
  clienteURL = environment.clienteURL;
  articulosURL = environment.clienteURL;
  usuarioURL = environment.usuURL;
  busquedaURL = environment.busquedaURL;

  constructor(private httpClient: HttpClient) {}

  public lista(datos: any) : Observable<any>  {
    const { tabla, busca, id, busca2, id2, limit } = datos;
    if(tabla==='cliente'){

    }
    if(tabla==='articulos'){
      
    }
    if(tabla==='facturas'){
      
    }
    console.log(`${this.busquedaURL}?dato=${busca}`);
    return this.httpClient.get<any>(`${this.busquedaURL}?dato=${busca}`);
  }
  public lista2(dato: string): Observable<Operadores[]> {
    return this.httpClient.get<Operadores[]>(`${this.clienteURL}?dato=${dato}&limit=${10}`);
  }
}
