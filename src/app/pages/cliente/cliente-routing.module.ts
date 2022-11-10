import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './componentes/detalle-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente.component';
import { ListaClienteComponent } from './componentes/lista-cliente.component';
import { NuevoClienteComponent } from './componentes/nuevo-cliente.component';
import { ClienteGuard } from './guards/cliente.guard';


const routes: Routes = [
  

  { path: 'lista', component: ListaClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin','user']} },
  { path: 'detalle/:id', component: DetalleClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin','user']} },
  { path: 'nuevo', component: NuevoClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin']} },
  { path: 'editar/:id', component: EditarClienteComponent, canActivate: [ClienteGuard], data: {expectedRol:['admin']} },
  
  { path: '**', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
