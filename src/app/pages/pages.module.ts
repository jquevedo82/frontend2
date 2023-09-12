import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { MaterialModule } from '../material/material.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { UsuarioComponent } from './usuario/usuario.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ClienteComponent,
    PagesComponent,
    ProductosComponent,
    FacturasComponent,
    UsuarioComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ComponentesModule,

  ],
  exports: [
    DashboardComponent,
    ClienteComponent,
    UsuarioComponent,
    PagesComponent,
    ProductosComponent,
    FacturasComponent,

  ]
})
export class PagesModule { }
