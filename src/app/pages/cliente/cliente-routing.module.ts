import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './componentes/detalle-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente.component';
import { ListaClienteComponent } from './componentes/lista-cliente.component';
import { NuevoClienteComponent } from './componentes/nuevo-cliente.component';
import { ClienteGuard } from './guards/cliente.guard';


const routes: Routes = [


  { path: 'lista', component: ListaClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin','user'], titulo: 'Clientes', urltitulo:'/cliente', Subtitulo: 'Lista'} },
  { path: 'detalle/:id', component: DetalleClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin','user'], titulo: 'Clientes', urltitulo:'/cliente', Subtitulo: 'Detalle'} },
  { path: 'nuevo', component: NuevoClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin'], titulo: 'Clientes', urltitulo:'/cliente', Subtitulo: 'Nuevo'} },
  { path: 'editar/:id', component: EditarClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin'], titulo: 'Clientes', urltitulo:'/cliente', Subtitulo: 'Editar'} },

  { path: '**', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
