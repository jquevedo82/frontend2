import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './Componentes/nuevo-usuario/nuevo-usuario.component';
import { RegisterGuard } from './Guards/register.guard';
import { ListarUsuarioComponent } from './Componentes/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './Componentes/editar-usuario/editar-usuario.component';
import { ModificarUsuarioComponent } from './Componentes/modificar-usuario/modificar-usuario.component';


const routes: Routes = [
{ path: '', component: ListarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Lista'} },
{ path: 'nuevo', component: NuevoUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Nuevo'} },
{ path: 'edit/:id', component: EditarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Editar'} },
{ path: 'password', component: ModificarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Password'} }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule { }
