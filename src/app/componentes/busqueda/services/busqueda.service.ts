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

  public lista(dato: string,tabla: string) : Observable<any>  {
    //const { tabla, busca, id, busca2, id2, limit } = datos;
    if(tabla==='clientes'){
      return this.httpClient.get<any>(`${this.clienteURL}?dato=${dato}`);
    }
    if(tabla==='articulos'){
      
    }
    if(tabla==='facturas'){
      
    }
    //console.log(`${this.busquedaURL}?dato=${busca}`);
    return this.httpClient.get<any>(`${this.clienteURL}?dato=${dato}undo`);
   
  }
  public lista2(dato: string,tabla: string): Observable<any[]> {
    
    return this.httpClient.get<any[]>(`${this.clienteURL}?dato=${dato}&limit=${10}`);
  }
}
