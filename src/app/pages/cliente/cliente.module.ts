import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './componentes/lista-cliente.component';
import { NuevoClienteComponent } from './componentes/nuevo-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente.component';
import { DetalleClienteComponent } from './componentes/detalle-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MaterialModule } from 'src/app/material/material.module';
import { BusquedaComponent } from '../../componentes/busqueda/busqueda.component';



@NgModule({
  declarations: [
    ListaClienteComponent, 
    NuevoClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ComponentesModule,
    MaterialModule,
  ],
  exports: [
    
  ]
})
export class ClienteModule { }
