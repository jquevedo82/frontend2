import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { NuevoUsuarioDto } from '../models/usuarios/nuevo-usuario.dto';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Inicio',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Clientes', url: 'cliente', icono: 'fa fa-users' },
        { titulo: 'Productos', url: 'productos', icono: 'fa fa-cubes' },
        { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-user-circle' },
        { titulo: 'Facturas', url: 'facturas', icono: 'fa fa-calendar-alt' },
      ],
    },
    {
      titulo: 'Administrador',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [{ titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' }],
    },
    {
      titulo: 'Preferencias',
      icono: 'nav-icon fas fa-cog',
      submenu: [
        {
          titulo: 'Cambiar Password',
          url: 'usuarios/password',
          icono: 'fa fa-ellipsis-h',
        },
      ],
    },
  ];

  perURL = environment.personalURL;
  menuURL = environment.menuURL;

  constructor(private httpcClient: HttpClient) {}

  usuario(dni: string): Observable<any> {
    return this.httpcClient.get<any>(`${this.perURL}`, {
      params: { where: " NroDni = '" + dni + "'" },
    });
  }
  getMenu(id2: string): Observable<any> {
    console.log(id2);
    let id;
    if (id2 != undefined) {
      id = id2.replace('"', '').replace('"', '');
      console.log(id);
    } else {
      id = id2;
    }

    const dato = this.httpcClient.get<any>(`${this.menuURL}`, {
      params: { id },
    });

    return dato;
  }

  getPadres(): Observable<any> {
    const dato = this.httpcClient.get<any>(`${this.menuURL}padres`);
    return dato;
  }

  getHijos(id: any): Observable<any> {
    const dato = this.httpcClient.get<any>(`${this.menuURL}hijos/${id}`);
    return dato;
  }

  patchPadre(id: number, datos: any): Observable<any> {
    const dato = this.httpcClient.patch<any>(`${this.menuURL}padre/${id}`, {
       datos ,
    });
    return dato;
  }
  postPadre(datos: any): Observable<any> {
    const dato = this.httpcClient.post<any>(`${this.menuURL}padre/`, {
       datos ,
    });
    return dato;
  }
  deletePadres(id: number): Observable<any> {
    const dato = this.httpcClient.delete<any>(`${this.menuURL}${id}`);
    return dato;
  }
}
