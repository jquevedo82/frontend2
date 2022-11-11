import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturasComponent } from './facturas/facturas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ClienteComponent,
    PagesComponent,
    UsuarioComponent,
    ProductosComponent,
    FacturasComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    ClienteComponent,
    PagesComponent,
    UsuarioComponent,
    ProductosComponent,
  ]
})
export class PagesModule { }
