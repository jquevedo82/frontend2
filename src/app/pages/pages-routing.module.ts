import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', component: PagesComponent,  data:{titulo:'Home', urltitulo:'no'},
  children: [
    {path:'dashboard' , component:DashboardComponent, data:{titulo:'Home',urltitulo:'no'}},
    {path: 'cliente', loadChildren: () => import('../pages/cliente/cliente.module').then( m => m.ClienteModule) },
    {path:'productos' , component:ProductosComponent, data:{titulo:'Producto',urltitulo:'no'}},
    {path:'usuarios' , component:UsuarioComponent, data:{titulo:'Usuario',urltitulo:'no'}},
    {path:'facturas' , component:FacturasComponent, data:{titulo:'Facturas',urltitulo:'no'}},
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
