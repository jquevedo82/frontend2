import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './Componentes/nuevo-usuario/nuevo-usuario.component';
import { RegisterGuard } from './Guards/register.guard';
import { ListarUsuarioComponent } from './Componentes/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './Componentes/editar-usuario/editar-usuario.component';
import { ModificarUsuarioComponent } from './Componentes/modificar-usuario/modificar-usuario.component';
import { AltaComponent } from './Componentes/Alta/Alta.component';
import { MenuComponent } from './Componentes/menu/menu.component';


const routes: Routes = [
  { path: '', component: ListarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Lista'} },
  { path: 'nuevo', component: NuevoUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Nuevo'} },
  { path: 'alta', component: AltaComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Personal', urltitulo:'/personal', Subtitulo: 'Alta Personal'} },
  { path: 'edit/:id', component: EditarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Editar'} },
  { path: 'password', component: ModificarUsuarioComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Password'} },
  { path: 'menu', component: MenuComponent, canActivate: [RegisterGuard], data: {expectedRol:['admin','user'], titulo: 'Usuarios', urltitulo:'/usuarios', Subtitulo: 'Menu'} },
  { path: '**', redirectTo:''}

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule { }
