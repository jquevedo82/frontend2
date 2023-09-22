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
  ];

  usuURL = environment.usuURL;

  constructor(private httpcClient: HttpClient) {}

  usuario(username: string): Observable<NuevoUsuarioDto> {
    return this.httpcClient.get<NuevoUsuarioDto>(`${this.usuURL}name`, {
      params: {username},
    });
  }
}
