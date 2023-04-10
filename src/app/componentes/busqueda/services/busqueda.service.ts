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
  empresaURL = environment.empresaURL;
  sucursalURL = environment.sucursalURL;

  constructor(private httpClient: HttpClient) {}

  public lista(dato: string,tabla: string) : Observable<any>  {
    //const { tabla2, busca, id, busca2, id2, limit } = datos;
console.log(`${this.empresaURL}${dato}`);
    if(tabla==='empresas'){
      return this.httpClient.get<any>(`${this.empresaURL}${dato}`);
    }
    if(tabla==='sucursales'){
      return this.httpClient.get<any>(`${this.sucursalURL}${dato}`);
    }
    if(tabla==='facturas'){
      
    }
    //console.log(`${this.busquedaURL}?dato=${busca}`);
    return this.httpClient.get<any>(`${this.clienteURL}?dato=${dato}`);
   
  }
  public lista2(dato: string,tabla: string): Observable<any[]> {
    
    return this.httpClient.get<any[]>(`${this.clienteURL}?dato=${dato}&limit=${10}`);
  }
}
