import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', component: PagesComponent,  data:{titulo:'Home'},
  children: [
    {path:'dashboard' , component:DashboardComponent, data:{titulo:'Home'}},
    { path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then( m => m.ClienteModule),data:{titulo:'Cliente'} },
    {path:'productos' , component:ProductosComponent, data:{titulo:'Producto'}},
    {path:'usuarios' , component:UsuarioComponent, data:{titulo:'Usuario'}},
  ]
},


];

/*
const routes: Routes = [
  { path: 'dashboard', component: PagesComponent},
  { path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then( m => m.ClienteModule) },
  
];
*/
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
